import React from 'react'
import user from "../../../assets/Img/user-icon.png";
import s from '../MessageBlock/Message.module.scss'
import {MessageType} from "../../../redux/Type";

export type MessagePropsType = {
    message: MessageType[]
}

function Message(props: MessagePropsType) {

    const messageItems = props.message.map(el => {
        return (
            <div key={el.id} className={s.message}>
                <img src={user} alt="photo"/>
                <span>{el.name}</span>
                <span>{el.message}</span>
            </div>
        )
    })

    return (
        <div>
            {messageItems}
        </div>
    )
}

export default Message