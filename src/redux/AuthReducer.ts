import {ActionDispatchType} from "./Type";
import {Dispatch} from "react";
import {getAuthAPI} from "../Api/Api";

export type InitialStateType = {
    userId: null
    login: null
    email: null
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionDispatchType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, ...action.data, isAuth: true}

        default:
            return state
    }
}
//Action
export const setUserDataAC = (userId: null, login: null, email: null) => {
    return {type: 'SET_USER_DATA', data: {userId, login, email}} as const
}
//Thunk
export const getAuthDataTC = () => (dispatch: Dispatch<ActionDispatchType>) => {
    getAuthAPI().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setUserDataAC(id, login, email))
        }
    })
}
