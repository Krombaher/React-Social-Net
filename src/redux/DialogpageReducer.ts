import {v1} from "uuid";
import {
    ActionDispatchType, AddMessageActionType,
    MessagePageType, RemoveMessageActionType, UpdateMessageActionType,
} from "./Type";

const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE = 'NEW-MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

let initialState = {
    newMessage: '',
    messages: [
        {id: v1(), photo: 'img', name: 'Name', message: 'Hello'},
    ]
}

export const dialogPageReducer = (state: MessagePageType = initialState, action: ActionDispatchType): MessagePageType => {

    switch (action.type) {

        case ADD_MESSAGE: {
            let newMessage = {
                id: v1(),
                photo: 'img',
                name: 'Name',
                message: state.newMessage
            }
            return {...state, messages:[...state.messages, newMessage]}
        }

        case NEW_MESSAGE: {
            return {...state, newMessage: action.message}
        }

        case REMOVE_MESSAGE: {
            return {...state, messages:state.messages.filter(m => m.id !== action.id)}
        }

        default:
            return state
    }
}

export const AddMessageActionCreator = ():AddMessageActionType => {
    return {type: ADD_MESSAGE}
}
export const UpdateMessageActionCreator = (message: string):UpdateMessageActionType => {
    return {type: NEW_MESSAGE, message: message}
}
export const RemoveMessageActionCreator = (id: string):RemoveMessageActionType => {
    return {type: REMOVE_MESSAGE, id: id}
}
