import React, { Fragment, useState } from "react";

import { useDispatch } from "react-redux/";

import { todosActions } from "../../store/todosSlice";

const NewToDoForm = () => {
  const dispatch = useDispatch();
  const [userInput, SetUserInput] = useState({
    title: "",
    description: "",
    starred: false,
  });

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    SetUserInput((prevInput) => {
      return {
        ...prevInput,
        title: event.target.value,
      };
    });
  };

  const descriptionChangeHandler = (event) => {
    //console.log(event.target.value);
    SetUserInput((prevInput) => {
      return {
        ...prevInput,
        description: event.target.value,
      };
    });
  };

  const starredChangeHandler = (event) => {
    // console.log(event);
    SetUserInput((prevInput) => {
      return {
        ...prevInput,
        starred: event.target.checked,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //console.log(event);
    let finalToDoItem = { ...userInput, id: Math.random().toString() };
    finalToDoItem = {
      ...finalToDoItem,
      key: finalToDoItem.id,
      complete: false,
    };

    dispatch(todosActions.addToDo({ item: finalToDoItem })); // here payload item is considered as  {item:finalToDoItem}
    //console.log({ finalToDoItem });
    SetUserInput({
      title: "",
      description: "",
      starred: false,
    });
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label htmlFor="titleInput">Title</label>
          <input
            type="text"
            className="form-control"
            id="titleInput"
            value={userInput.title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descriptionInput">Description</label>
          <input
            type="text"
            className="form-control"
            id="descriptionInput"
            value={userInput.description}
            onChange={descriptionChangeHandler}
            required
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="starredInput"
            checked={userInput.starred}
            value={userInput.starred ? "checked" : "unchecked"}
            onChange={starredChangeHandler}
          />
          <label className="form-check-label" htmlFor="starredInput">
            Mark As important
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </Fragment>
  );
};

export default NewToDoForm;

//item - [key,id,Title,Description,created-date,starred,complete]
