import React from 'react'
import {StoreContext} from "../../../StoreContext";
import Message from "./Message";
import {AddMessageActionCreator, UpdateMessageActionCreator} from "../../../redux/DialogpageReducer";

export const MessageContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                const addMessageHandler = () => {
                    return (
                        store.dispatch(AddMessageActionCreator())
                    )
                }

                const updateMessageHandler = (message: string) => {
                    return (
                        store.dispatch(UpdateMessageActionCreator(message))
                    )
                }

                return (
                    <Message
                        newMessage={store.getState().messagePage.newMessage}
                        message={store.getState().messagePage.messages}
                        addMessage={addMessageHandler}
                        updateMessage={updateMessageHandler}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}
