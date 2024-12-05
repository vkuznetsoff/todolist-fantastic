import { v1 } from "uuid"
import { TodolistType } from "../App"
import { todolistReducer } from "./todolist-reducer"

test('removing todolist', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: 'Title1', filter: "active" },
        { id: todolistId2, title: 'Title2', filter: "all" },

    ]

    const endState = todolistReducer(startState, { type: 'DELETE-TD', id: todolistId1 })
    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})

test('add todolist', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()


    const newTitle = 'New title'

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: 'Title1', filter: "active" },
        { id: todolistId2, title: 'Title2', filter: "all" },

    ]

    const endState = todolistReducer(startState, { type: 'ADD-TD', title: newTitle })
    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTitle)
    expect(endState[2].filter).toBe('all')
})

test('Change todolist Title', () => {

    const newTitle = 'New title'
    let todolistId1 = v1()
    let todolistId2 = v1()
    const startState: Array<TodolistType> = [{
        id: todolistId1,
        title: 'Title1',
        filter: "all"
    },
    {
        id: todolistId2,
        title: 'Title2',
        filter: "all"
    }]

    const endState = todolistReducer(startState, { newTitle: newTitle, id: todolistId2, type: "CHANGE-TODOLIST-TITLE" })

    expect(endState[1].title).toBe(newTitle)
    expect(endState[0].title).toBe('Title1')

})