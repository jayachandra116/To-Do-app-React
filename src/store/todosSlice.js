import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "ToDos",
  initialState: {
    toDos: [],
    changed: false,
  },
  reducers: {
    replaceToDos(state, action) {
      state.toDos = action.payload.toDos;
      state.changed = true;
    },
    addToDo(state, action) {
      state.toDos.push(action.payload.item);
      state.changed = true;
    },
    removeToDo(state, action) {
      state.changed = true;
      state.toDos = state.toDos.filter((todo) => {
        return todo.id !== action.payload.item.id;
      });
    },
    modifyToDo(state, action) {
      state.changed = true;
      let newToDos = [...state.toDos];
      let itemIndex = newToDos.findIndex(
        (argItem) => argItem.id === action.payload.item.id
      );
      newToDos[itemIndex] = action.payload.item;
      state.toDos = newToDos;
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
