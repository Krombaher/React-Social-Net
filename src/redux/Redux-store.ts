import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./reducers/ProfilepageReducer";
import {dialogPageReducer} from "./reducers/DialogpageReducer";
import {usersReducer} from "./reducers/UsersReducer";
import {authReducer} from "./reducers/AuthReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./reducers/AppReducer";

export let rootReducer = combineReducers( {
    profilePage:profilePageReducer,
    messagePage:dialogPageReducer,
    usersPage:usersReducer,
    authPage:authReducer,
    form: formReducer,
    app: appReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>