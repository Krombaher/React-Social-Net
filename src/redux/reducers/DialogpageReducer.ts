import {v1} from "uuid";
import {ActionDispatchType, MessagePageType,} from "../Type";

let initialState = {
    newMessage: '',
    messages: [
        {id: v1(), photo: 'img', name: 'Name', message: 'Hello'},
    ]
}

export const dialogPageReducer = (state: MessagePageType = initialState, action: ActionDispatchType): MessagePageType => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage = {
                id: v1(),
                photo: 'img',
                name: 'Name',
                message: state.newMessage
            }
            return {...state, messages:[...state.messages, newMessage]}
        }

        case 'NEW-MESSAGE': {
            return {...state, newMessage: action.message}
        }

        case 'REMOVE_MESSAGE': {
            return {...state, messages:state.messages.filter(m => m.id !== action.id)}
        }

        default:
            return state
    }
}

export const AddMessageAC = () => {
    return {type: 'ADD-MESSAGE'} as const
}
export const UpdateMessageAC = (message: string) => {
    return {type: 'NEW-MESSAGE', message: message} as const
}
export const RemoveMessageAC = (id: string) => {
    return {type: 'REMOVE_MESSAGE', id: id} as const
}
