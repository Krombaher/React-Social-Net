import React from 'react'
import {
    AddMessageActionCreator,
    RemoveMessageActionCreator,
    UpdateMessageActionCreator
} from "../../../redux/DialogpageReducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";
import {Dispatch} from "redux";
import {MessageType} from "../../../redux/Type";

type MapStatePropsType = {
    newMessage:string
    message:MessageType[]
}

type MapDispatchPropsType = {
    addMessage: () => void
    updateMessage: (message: string) => void
    removeMessage:(id: string) => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        newMessage:state.messagePage.newMessage,
        message:state.messagePage.messages
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addMessage:() => {
            dispatch(AddMessageActionCreator())
        },
        updateMessage: (message: string) => {
            dispatch(UpdateMessageActionCreator(message))
        },
        removeMessage:(id: string) => {
            dispatch(RemoveMessageActionCreator(id))
        }
    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)