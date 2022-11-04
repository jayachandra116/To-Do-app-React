import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//custom components
import NewToDoForm from "../ToDos/NewToDoForm";
import ToDosFilter from "../ToDos/ToDosFilter";
import ToDosList from "../ToDos/ToDosList";
//import Notification from "./Notification";

//redux imports
import { fetchToDosData, sendToDosData } from "../../store/todo-actions";

let isInitial = true;

const MainSection = (props) => {
  const todos = useSelector((state) => state.todos.toDos);
  const changed = useSelector((state) => state.todos.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("useEffect called");
    dispatch(fetchToDosData());
  }, [dispatch]);

  useEffect(() => {
    //console.log("useeffect is called as todos are changed");
    //console.log({ todos });
    if (isInitial) {
      isInitial = false;
      //console.log("hew isInitial is true");
      return;
    }
    //console.log(changed);
    if (changed) {
      //console.log("todos are changed so dispatching sendToDosData action");
      dispatch(sendToDosData(todos));
    }
  }, [todos]);

  //filter state manegement using useState only as it is used on locally
  const defaultFilter = {
    starred: false,
  };
  const [currentfilter, setFilter] = useState(defaultFilter);
  const filterChangeHandler = (filter) => {
    setFilter({
      starred: filter.starred,
    });
  };

  return (
    <Fragment>
      <div className="p-5">
        <div className="container p-3">
          <div className="row justify-content-center">
            <NewToDoForm />
          </div>
          <div className="container p-3">
            {todos.length > 0 ? ( //
              <ToDosFilter
                filter={currentfilter}
                onChangeFilter={filterChangeHandler}
              />
            ) : (
              <div>
                No Filter form could be shown as there are no to do items
              </div>
            )}
            <ToDosList filter={currentfilter} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainSection;
