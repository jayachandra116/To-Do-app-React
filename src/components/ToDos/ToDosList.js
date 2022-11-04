import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { todosActions } from "../../store/todosSlice";

const ToDosList = (props) => {
  const todos = useSelector((state) => state.todos.toDos);
  const dispatch = useDispatch();
  const recievedFilter = props.filter;
  // console.log("Present selected filter is : ");
  // console.log(recievedFilter);
  const filteredItems =
    recievedFilter.starred === false
      ? todos
      : todos.filter((item) => item.starred === recievedFilter.starred);

  if (filteredItems.length === 0) {
    return (
      <div className="jumbotron ">
        <h1 className="display-4">No items to show for selected FILTER</h1>
      </div>
    );
  }

  return (
    <div className="container p-3">
      <ul className="list-group">
        {filteredItems.map((item) => {
          return (
            <li className="list-group-item" key={item.key}>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">
                    {item.complete ? (
                      <del>{item.title}</del>
                    ) : (
                      <p>{item.title}</p>
                    )}
                  </h4>
                </div>
                <div className="card-body">
                  <p className="card-text text-justify">{item.description}</p>
                </div>
                <div className="card-footer">
                  <span className="badge">
                    {item.starred ? (
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => {
                          dispatch(
                            todosActions.modifyToDo({
                              item: { ...item, starred: false },
                            })
                          );
                        }}
                      >
                        Mark As Unimportant
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => {
                          dispatch(
                            todosActions.modifyToDo({
                              item: { ...item, starred: true },
                            })
                          );
                        }}
                      >
                        Mark as Important
                      </button>
                    )}
                  </span>
                  <span>
                    {item.complete ? (
                      <div style={{ float: "right" }}>Completed</div>
                    ) : (
                      <button
                        className="btn  btn-success"
                        onClick={() => {
                          dispatch(
                            todosActions.modifyToDo({
                              item: { ...item, complete: true },
                            })
                          );
                        }}
                        style={{ float: "right" }}
                      >
                        Mark as complete
                      </button>
                    )}
                  </span>
                  &nbsp;
                  <span>
                    <button
                      className="btn btn-danger"
                      style={{ float: "right", border: "1px solid black" }}
                      onClick={() => {
                        dispatch(
                          todosActions.removeToDo({
                            item: item,
                          })
                        );
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDosList;
