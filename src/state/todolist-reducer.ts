import { v1 } from "uuid";
import { TodolistType } from "../App";

type ActionType = {
  type: string;
  [key: string]: any;
};

export const todolistReducer = (
  state: Array<TodolistType>,
  action: ActionType
) => {
  switch (action.type) {
    case "DELETE-TD":
      return [...state.filter((td) => td.id !== action.id)];

    case "ADD-TD":
        const newTodolist = {id: v1(), title: action.title, filter:'all'}
      return [...state, newTodolist];

    case "CHANGE-TODOLIST-TITLE":

      return state.map(t => {
        if (t.id === action.id) {
          return {...t, title: action.newTitle}
        }
        return t
      })

    default:
      throw new Error("No such action type");
  }
};
