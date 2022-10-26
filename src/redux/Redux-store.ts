import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./ProfilepageReducer";

export let reducers = combineReducers( {
    profilePage:profilePageReducer
});

export let store = createStore(reducers)