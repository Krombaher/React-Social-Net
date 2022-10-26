import {v1} from "uuid";
import {
    ActionDispatchType, AddMessageActionType,
    MessagePageType, UpdateMessageType,
} from "./Type";

const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE = 'NEW-MESSAGE';

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
