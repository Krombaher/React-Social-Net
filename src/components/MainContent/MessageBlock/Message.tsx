import React, {ChangeEvent} from 'react'
import user from "../../../assets/Img/user-icon.png";
import s from '../MessageBlock/Message.module.scss'
import {MessageType} from "../../../redux/Type";
import {Avatar, Badge, Button, IconButton, TextField} from "@mui/material";
import {Delete} from "@mui/icons-material";

export type MessageProps = {
    newMessage: string
    addMessage: () => void
    updateMessage: (message: string) => void
    message: MessageType[]
}

const Message = (props: MessageProps) => {

    const addMessageHandler = () => {
        props.addMessage()
        props.updateMessage('')
    }
    const updateMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(event.currentTarget.value)
    }
    const messageItems = props.message.map(el => {
        return (
            <div key={el.id} className={s.message}>
                <img src={user} alt="photo"/>
                <span>{el.name}</span>
                <span>{el.message}</span>
                <IconButton aria-label="delete" size="small">
                    <Delete fontSize="small" />
                </IconButton>
            </div>
        )
    })

    return (
        <div className={s.messageSection}>
            <div className={s.messageUserAvatars}>
                <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
                    <Avatar alt="Remy Sharp" src='' sx={{ width: 56, height: 56 }}/>
                </Badge>
            </div>

            <div className={s.messageSendBlock}>
                <TextField value={props.newMessage} onChange={updateMessage} />
                <Button onClick={addMessageHandler} variant="contained">Send Message</Button>
            </div>
                {messageItems}
        </div>
    )
}

export default Message