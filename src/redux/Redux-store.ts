import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./ProfilepageReducer";
import {dialogPageReducer} from "./DialogpageReducer";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

export let rootReducer = combineReducers( {
    profilePage:profilePageReducer,
    messagePage:dialogPageReducer,
    usersPage:usersReducer,
    authPage:authReducer,
    form: formReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>