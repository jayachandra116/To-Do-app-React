import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import todosReducer from "./todosSlice";
import notificationReducer from "./notification-Slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
    notification: notificationReducer,
  },
});

export default store;
