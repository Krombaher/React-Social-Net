import React, {ChangeEvent} from 'react'
import user from "../../../assets/Img/user-icon.png";
import s from '../MessageBlock/Message.module.scss'
import {MessageType} from "../../../redux/Type";
import {Avatar, Button, IconButton, TextField} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {FriendMessage} from "./FriendMessage";

export type MessageProps = {
    newMessage: string
    message: MessageType[]
    addMessage: () => void
    updateMessage: (message: string) => void
    removeMessage:(id: string) => void
}

export const Message = (props: MessageProps) => {

    const addMessageHandler = () => {
        props.addMessage()
        props.updateMessage('')
    }
    const updateMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(event.currentTarget.value)
    }

    const removeMessageHandler = (id:string) => {
        props.removeMessage(id)
    }

    const messageItems = props.message.map(el => {
        return (
            <div key={el.id} className={s.message}>
                <div className={s.avatarAndName}>
                    <img src={user} alt="photo"/>
                    <div className={s.avatarName}>{el.name}</div>
                </div>
                <div className={s.messageTextBlock}>
                    <div className={s.messageText}>{el.message}</div>
                    <IconButton onClick={() => removeMessageHandler(el.id)} aria-label="delete" size="small">
                        <Delete fontSize="small"/>
                    </IconButton>
                </div>
            </div>
        )
    })

    return (
        <div className={s.messageSection}>

            <FriendMessage/>
            {messageItems}

            <div className={s.messageSendBlock}>
                <TextField
                    label="Enter message..."
                    style={{width: '450px', margin: '20px'}}
                    value={props.newMessage}
                    onChange={updateMessageHandler}
                />
                <Button
                    style={{width: '150px', marginLeft: '20px'}}
                    onClick={addMessageHandler}
                    variant="contained">Send Message
                </Button>
            </div>
        </div>
    )
}

