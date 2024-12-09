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

export type Action2Type = {
  type: "2";
  title: string;
};

type ActionType = RemoveTaskActionType | Action2Type;

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

    case "REMOVE-TASK":
      const filteredTask = state[action.tdId].filter(
        (t) => t.id !== action.taskId
      );
      const stateCopy = { ...state };
      stateCopy[action.tdId] = filteredTask;
      return stateCopy;

    case "2":
      return { ...state };

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

export const action2AC = (title: string): ActionType => {
  return {
    type: "2",
    title,
  };
};
