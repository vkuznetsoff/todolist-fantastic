import { v1 } from "uuid";
import { TaskStateType } from "../App";
import { TaskType } from "../Todolist";

// export type ChangeTaskTitleActionType = {
//   type: "CHANGE-TASK-TITLE";
//   id: string;
//   newTitle: string;
// };

export type RemoveTaskActionType = {
  type: "REMOVE-TASK";
  taskId: string;
  tdId: string;
};

export type AddTaskActionType = {
  type: "ADD-TASK";
  todolistID: string;
  title: string;
};

export type ChangeTaskStatusActionType = {
  type: "CHANGE-STATUS";
  todolistID: string;
  taskId: string;
};

type ActionType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType;

export const TaskReducer = (
  state: TaskStateType,
  action: ActionType
): TaskStateType => {
  switch (action.type) {
    // case 'CHANGE-TASK-TITLE':
    //     return state[0].map(t => {
    //         if (t.id === action.id) {
    //             return {...t, title: action.newTitle}
    //         }

    //         return t
    //     })

    case "REMOVE-TASK": {
      const filteredTask = state[action.tdId].filter(
        (t) => t.id !== action.taskId
      );
      const stateCopy = { ...state };
      stateCopy[action.tdId] = filteredTask;
      return stateCopy;
    }

    case "ADD-TASK": {
      const stateCopy = { ...state };
      const tasks = state[action.todolistID];
      const newTask = {
        id: v1(),
        title: action.title,
        isDone: false,
      };

      const newTasks = [newTask, ...tasks];
      stateCopy[action.todolistID] = newTasks;
      return stateCopy;
    }

    case "CHANGE-STATUS": {
      const stateCopy = {...state}
      const tasks = stateCopy[action.todolistID]
      const task = tasks.find(t => t.id === action.taskId)
      if (task) {
        task.isDone =  !task.isDone
      }

      return stateCopy
    }

    default:
      throw new Error("No such action type in task-reducer");
  }
};

// export const changeTaskTitleAC = (newTitle: string, id: string): ActionType => {
//     return {
//         type: 'CHANGE-TASK-TITLE',
//         id,
//         newTitle
//     }
// }

export const removeTaskAC = (
  taskId: string,
  tdId: string
): RemoveTaskActionType => {
  return {
    type: "REMOVE-TASK",
    taskId,
    tdId,
  };
};

export const addTaskAC = (
  todolistID: string,
  title: string
): AddTaskActionType => {
  return {
    type: "ADD-TASK",
    todolistID: todolistID,
    title,
  };
};

export const changeTaskStatusAC = (
  todolistID: string,
  taskId: string
): ChangeTaskStatusActionType => {
  return {
    type: "CHANGE-STATUS",
    todolistID: todolistID,
    taskId,
  };
};

