import { v1 } from "uuid"
import { TaskType } from "../Todolist"
import { ChangeTaskTitleActionType, TaskReducer } from "./task-reducer"

test('Change task title', () => {

    const newTitle = 'newTitle'
    const id = v1()

    const startState: Array<TaskType> = [{
        id: id,
        isDone: true,
        title: 'Title'
    }]

    const action: ChangeTaskTitleActionType = {
        type: 'CHANGE-TASK-TITLE',
        id,
        newTitle
    }

    const endState = TaskReducer(startState, action)

    expect(endState[0].title).toBe(newTitle)
    expect(endState[0].id).toBe(id)
    expect(endState[0].isDone).toBe(true)

})