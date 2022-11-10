import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./ProfilepageReducer";
import {dialogPageReducer} from "./DialogpageReducer";

export let rootReducer = combineReducers( {
    profilePage:profilePageReducer,
    messagePage:dialogPageReducer
})

export let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>