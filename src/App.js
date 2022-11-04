//importing lib
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

//custom styles
import "./App.css";
//custom components
import Header from "./components/layout/Header";
import MainSection from "./components/layout/MainSection";
import LoginForm from "./components/Login/LoginForm";
import Notification from "./components/layout/Notification";


function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const notification=useSelector(state=>state.notification);
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Header />
      {isAuth ? <MainSection /> : <LoginForm />}
    </Fragment>
  );
}

export default App;
