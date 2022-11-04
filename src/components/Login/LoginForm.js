import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/";
import { authActions } from "../../store/auth";

const LoginForm = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const usrnmChangeHandler = (event) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        username: event.target.value,
      };
    });
  };

  const pwdChangeHandler = (event) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        password: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">
          <div className="p-md-5">
            <form onSubmit={submitHandler}>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  onChange={usrnmChangeHandler}
                  value={userInput.username}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={userInput.password}
                  onChange={pwdChangeHandler}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <button
                  type="submit"
                  className="form-control btn btn-primary rounded submit px-3"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
