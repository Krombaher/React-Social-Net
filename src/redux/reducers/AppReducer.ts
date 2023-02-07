import {ActionDispatchType} from "../Type";
import {getAuthDataTC} from "./AuthReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../Redux-store";

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionDispatchType): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

//Action
export const initializedAC = () => {
    return {type: 'SET_INITIALIZED'} as const
}

//Thunk
export const initializedTC = () => (dispatch: ThunkDispatch<AppStateType, any, ActionDispatchType>) => {
    let promise = dispatch(getAuthDataTC())

    promise.then(() => {
        dispatch(initializedAC())
    })
}

