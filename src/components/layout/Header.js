import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Header = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <nav className="navbar navbar-nav navbar-dark bg-primary align-items-center">
      <div className="container">
        <a className="navbar-brand " href="http://localhost:3000/">
          <h2>To-Do-App</h2>
        </a>
        {isAuth ? (
          <span className="nav-link">
            <button className="btn btn-lg" onClick={logoutHandler}>
              Logout
            </button>
          </span>
        ) : (
          <span className="nav-link"></span>
        )}
      </div>
    </nav>
  );
};

export default Header;
