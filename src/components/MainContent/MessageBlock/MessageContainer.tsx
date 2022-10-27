import React from 'react'
import {StoreContext} from "../../../StoreContext";

import {
    AddMessageActionCreator,
    RemoveMessageActionCreator,
    UpdateMessageActionCreator
} from "../../../redux/DialogpageReducer";
import {Message} from "./Message";

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

                const removeMessageHandler = (id:string) => {
                    return (
                        store.dispatch(RemoveMessageActionCreator(id))
                    )
                }

                return (
                    <>
                        <Message
                            newMessage={store.getState().messagePage.newMessage}
                            message={store.getState().messagePage.messages}
                            addMessage={addMessageHandler}
                            updateMessage={updateMessageHandler}
                            removeMessage={removeMessageHandler}
                        />
                    </>
                )
            }}
        </StoreContext.Consumer>
    )
}
