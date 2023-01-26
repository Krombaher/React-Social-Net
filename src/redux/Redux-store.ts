import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./ProfilepageReducer";
import {dialogPageReducer} from "./DialogpageReducer";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";

export let rootReducer = combineReducers( {
    profilePage:profilePageReducer,
    messagePage:dialogPageReducer,
    usersPage:usersReducer,
    authPage:authReducer
})

export let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>