import { StateType, userReducer } from "./user-reducer"

test('user reducer should incr only age', () => {
    const startState: StateType = { age: 30, childrenCount:2, name: "Nik"}
    const endState: StateType = userReducer(startState, {type: "INCREMENT-AGE"})

    expect(endState.age).toBe(31)
    expect(endState.childrenCount).toBe(2)
})

test('user reducer should incr only childrCount', () => {
    const startState: StateType = { age: 30, childrenCount:2, name: "Nik"}
    const endState: StateType = userReducer(startState, {type: "INCREMENT-CHILDREN-COUNT"})

    expect(endState.childrenCount).toBe(3)
    expect(endState.age).toBe(30)
})

test('user reducer should change name', () => {
    const startState: StateType = { age: 30, childrenCount:2, name: "Nik"}

    const newName = "Vlad"
    const endState: StateType = userReducer(startState, {type: "CHANGE-NAME", name: newName})

    expect(endState.name).toBe(newName)
    expect(endState.age).toBe(30)
})