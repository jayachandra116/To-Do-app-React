import React, { useState } from "react";

const ToDosFilter = (props) => {
  const checkboxChangeHandler = (event) => {
    props.onChangeFilter({
      starred: event.target.checked,
    });
  };

  return (
    <div className="p-3">
      <form>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="starredInput"
            checked={props.filter.starred}
            onChange={checkboxChangeHandler}
          />
          <label className="form-check-label" htmlFor="starredInput">
            Show Important
          </label>
        </div>
      </form>
    </div>
  );
};

export default ToDosFilter;
