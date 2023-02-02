import React from 'react'
import {AddMessageAC, RemoveMessageAC, UpdateMessageAC,} from "../../../redux/DialogpageReducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";
import {compose, Dispatch} from "redux";
import {MessageType} from "../../../redux/Type";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

type MapStatePropsType = {
    newMessage:string
    message:MessageType[]
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: () => void
    updateMessage: (message: string) => void
    removeMessage:(id: string) => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        newMessage:state.messagePage.newMessage,
        message:state.messagePage.messages,
        isAuth: state.authPage.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addMessage:() => {
            dispatch(AddMessageAC())
        },
        updateMessage: (message: string) => {
            dispatch(UpdateMessageAC(message))
        },
        removeMessage:(id: string) => {
            dispatch(RemoveMessageAC(id))
        }
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Message)
