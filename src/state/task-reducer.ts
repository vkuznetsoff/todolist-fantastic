import { TaskType } from "../Todolist";

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    id: string,
    newTitle: string
}

export const TaskReducer = (state: Array<TaskType>, action: ChangeTaskTitleActionType) => {

    switch (action.type) {
        case 'CHANGE-TASK-TITLE':   
            return state.map(t => {
                if (t.id === action.id) {
                    return {...t, title: action.newTitle}
                }

                return t
            })
        default:
            throw new Error('No such action type in task-reducer')
    }

}