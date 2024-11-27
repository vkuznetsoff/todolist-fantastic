import { act, Children } from "react"

export type StateType = {
    name: string,
    childrenCount: number,
    age: number
}

type ActionTypeType = 'INCREMENT-AGE' | 'INCREMENT-CHILDREN-COUNT' | 'CHANGE-NAME'
type ActionType = {
    type: ActionTypeType,
    [key: string]: any
}

export const userReducer = (state: StateType, action: ActionType) => {

    switch (action.type) {

        case "INCREMENT-AGE":
            let newState = { ...state }
            newState.age += 1
            return newState

        case "INCREMENT-CHILDREN-COUNT":
            return {
                ...state,
                childrenCount: state.childrenCount + 1
            }

        case "CHANGE-NAME":
            return {
                ...state,
                name: action.name
            }
        default:
            throw new Error('Error!')
    }
}