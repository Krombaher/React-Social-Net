import {ActionDispatchType} from "./Type";
import {Dispatch} from "react";
import {getAuthAPI, loginAPI, logoutAPI} from "../Api/Api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./Redux-store";

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
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}
//Action
export const setUserDataAC = (userId: null, login: null, email: null, isAuth: boolean) => {
    return {type: 'SET_USER_DATA', data: {userId, login, email, isAuth}} as const
}
//Thunk
export const getAuthDataTC = () => (dispatch: Dispatch<ActionDispatchType>) => {
    getAuthAPI().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setUserDataAC(id, login, email, true))
        }
    })
}

export const loginTC = (email:string, password:string, rememderMe: boolean) => (dispatch: ThunkDispatch<AppStateType, any, ActionDispatchType>) => {
    loginAPI(email, password, rememderMe)
        .then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthDataTC())
        }
    })
}

export const logoutTC = () => (dispatch: Dispatch<ActionDispatchType>) => {
    logoutAPI()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false))
            }
        })
}
