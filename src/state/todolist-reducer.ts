import { v1 } from "uuid";
import { FilterType, TodolistType } from "../App";

// export type ActionType = {
//   type: string;
//   [key: string]: any;
// };

export type RemoveTodolistActionType = {
  type: 'REMOVE-TODOLIST',
  id: string
}

export type AddTodolistAction = {
  type: 'ADD-TODOLIST',
  title: string
}

export type ChangeTodolistTitleAction = {
  type: "CHANGE-TODOLIST-TITLE",
  id: string,
  title: string
}

export type ChangeTodolisFilterAction = {
  type: "CHANGE-FILTER",
  id: string,
  filter: FilterType
}

export type ActionType = RemoveTodolistActionType | AddTodolistAction | ChangeTodolisFilterAction | ChangeTodolistTitleAction

export const todolistReducer = (
  state: Array<TodolistType>,
  action: ActionType
) => {
  switch (action.type) {
    case "REMOVE-TODOLIST":
      return [...state.filter((td) => td.id !== action.id)];

    case "ADD-TODOLIST":
      const newTodolist = { id: v1(), title: action.title, filter: 'all' }
      return [...state, newTodolist];

    case "CHANGE-TODOLIST-TITLE":

      return state.map(t => {
        if (t.id === action.id) {
          return { ...t, title: action.title }
        }
        return t
      })

    case "CHANGE-FILTER":
      return state.map(t => {
        if (t.id === action.id) {
          return { ...t, filter: action.filter }
        }
        return t
      })
    default:
      throw new Error("No such action type");
  }
};


export const RemoveTodolistActionCreator = (id: string): RemoveTodolistActionType => {
  return {
    type: "REMOVE-TODOLIST",
    id
  }
}

export const AddTodolistActionCreator = (title: string): AddTodolistAction => {
  return {
    type: "ADD-TODOLIST",
    title
  }
}

export const ChangeTodolistTitleActionCreator = (id: string, title: string): ChangeTodolistTitleAction => {
  return {
    type: "CHANGE-TODOLIST-TITLE",
    id,
    title
  }
}

export const ChangeTodolistFilterActionCreator = (id: string, filter: FilterType): ChangeTodolisFilterAction => {
  return {
    type: "CHANGE-FILTER",
    id,
    filter
  }
}