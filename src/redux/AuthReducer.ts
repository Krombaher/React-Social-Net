import {ActionDispatchType} from "./Type";

export type InitialStateType = {
    userId: null
    login: null
    email: null
}

let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionDispatchType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, ...action.data}

        default:
            return state
    }
}

export const setUserDataAC = (userId: null, login: null, email: null) => {
    return {type: 'SET_USER_DATA', data: {userId, login, email}} as const
}
