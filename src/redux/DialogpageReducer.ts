import {v1} from "uuid";
import {
    ActionDispatchType, AddMessageActionType,
    MessagePageType, RemoveMessageType, RemovePostTextType, UpdateMessageType,
} from "./Type";

const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE = 'NEW-MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

let initialState = {
    newMessage: '',
    messages: [
        {id: v1(), photo: 'img', name: 'Victor', message: 'Hello'},
        {id: v1(), photo: 'img', name: 'Dima', message: 'Yo'},
        {id: v1(), photo: 'img', name: 'Valera', message: 'How are you?'},
    ]
}

export const dialogPageReducer = (state: MessagePageType = initialState, action: ActionDispatchType) => {

    switch (action.type) {

        case ADD_MESSAGE: {
            let newMessage = {
                id: v1(),
                photo: 'img',
                name: 'Name',
                message: state.newMessage
            }
            state.messages = [...state.messages, newMessage]
            return state
        }

        case NEW_MESSAGE: {
            state.newMessage = action.message
            return state
        }

        case REMOVE_MESSAGE: {
            state.messages = state.messages.filter(m => m.id !== action.id)
            return state
        }

        default:
            return state
    }
}

export const AddMessageActionCreator = () => {
    return <AddMessageActionType>{type: ADD_MESSAGE}
}
export const UpdateMessageActionCreator = (message: string) => {
    return <UpdateMessageType>{type: NEW_MESSAGE, message: message}
}
export const RemoveMessageActionCreator = (id: string) => {
    return <RemoveMessageType>{type: REMOVE_MESSAGE, id: id}
}
