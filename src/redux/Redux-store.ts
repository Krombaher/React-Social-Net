import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./ProfilepageReducer";
import {dialogPageReducer} from "./DialogpageReducer";
import {UsersReducer} from "./UsersReducer";

export let rootReducer = combineReducers( {
    profilePage:profilePageReducer,
    messagePage:dialogPageReducer,
    usersPage:UsersReducer
})

export let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>