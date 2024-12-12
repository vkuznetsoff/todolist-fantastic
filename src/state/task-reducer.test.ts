import { v1 } from "uuid"
import { TaskType } from "../Todolist"
import { addTaskAC, changeTaskStatusAC, removeTaskAC, TaskReducer } from "./task-reducer"
import { TaskStateType, TodolistType } from "../App"
import { useState } from "react"


test('Correct task deleted from correctTodolist', () => {
    const tdList1 = v1()
  const tdList2 = v1()

  const startState: TaskStateType = 
    {
        [tdList1]: [
          { id: '1', title: "HTML&CSS", isDone: true },
          { id: '2', title: "CSS", isDone: true },
          { id: '3', title: "JS", isDone: false }
        ],
        [tdList2]: [
          { id: '1', title: "Begin", isDone: true },
          { id: '2', title: "Matrix", isDone: false },
          { id: '3', title: "Titanik", isDone: true }
        ]
      }

      const action = removeTaskAC('2', tdList2)
      const endState = TaskReducer(startState, action)

      expect(endState[tdList1].length).toBe(3)
      expect(endState[tdList2].length).toBe(2)
      expect(endState[tdList2].every(t => t.id != "2")).toBeTruthy()
  
   
})

test('Add task to correct Todolist', () => {
  const tdList1 = v1()
  const tdList2 = v1()

  const newTitle = 'NewTitle'


const startState: TaskStateType = 
  {
      [tdList1]: [
        { id: '1', title: "HTML&CSS", isDone: true },
        { id: '2', title: "CSS", isDone: true },
        { id: '3', title: "JS", isDone: false }
      ],
      [tdList2]: [
        { id: '1', title: "Begin", isDone: true },
        { id: '2', title: "Matrix", isDone: false },
        { id: '3', title: "Titanik", isDone: true }
      ]
    }

    const action = addTaskAC(tdList1, newTitle)
    const endState = TaskReducer(startState, action)

    expect(endState[tdList1].length).toBe(4)
    expect(endState[tdList2].length).toBe(3)

    expect(endState[tdList1][0].id).toBeDefined()
    expect(endState[tdList1][0].title).toBe(newTitle)
    expect(endState[tdList1][0].isDone).toBe(false)

 
})

test('Correct change for tas status', () => {
  const tdList1 = v1()
  const tdList2 = v1()

const startState: TaskStateType = 
  {
      [tdList1]: [
        { id: '1', title: "HTML&CSS", isDone: true },
        { id: '2', title: "CSS", isDone: true },
        { id: '3', title: "JS", isDone: false }
      ],
      [tdList2]: [
        { id: '1', title: "Begin", isDone: true },
        { id: '2', title: "Matrix", isDone: false },
        { id: '3', title: "Titanik", isDone: true }
      ]
    }

    const action = changeTaskStatusAC(tdList1, '1')
    const endState: TaskStateType = TaskReducer(startState, action)

    expect(endState[tdList1][0].id).toBe('1')
    expect(endState[tdList1][0].title).toBe("HTML&CSS")
    expect(endState[tdList1][0].isDone).toBe(false)
    expect(endState[tdList2][0].isDone).toBe(true)
    
})
// test('Change task title', () => {

//     const newTitle = 'newTitle'
//     const id = v1()

//     const startState: TaskStateType = [{
       
//         // id: id,
//         // isDone: true,
//         // title: 'Title'
//     }]

//     const action: Action1Type = {
//         type: '1',
//         id    
//     }

//     const endState = TaskReducer(startState, action)

//     // expect(endState[0].title).toBe(newTitle)
//     expect(endState[0].id).toBe(id)
//     expect(endState[0].isDone).toBe(true)

// })