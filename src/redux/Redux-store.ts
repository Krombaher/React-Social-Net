import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./ProfilepageReducer";
import {dialogPageReducer} from "./DialogpageReducer";

export let reducers = combineReducers( {
    profilePage:profilePageReducer,
    messagePage:dialogPageReducer
});

export let store = createStore(reducers)