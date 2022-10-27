import React from 'react'
import s from '../MessageBlock/Message.module.scss'
import {v1} from "uuid";


export type MessageProps = {

}

export const FriendMessage = (props: MessageProps) => {
    const friendMessage = [
        {id: v1(), photo: 'img', name: 'Victor', message: 'Hello'},
    ]
    const addMessageHandler = () => {}
    const updateMessageHandler = () => {}
    const removeMessageHandler = () => {}

    const friendMessageItems = friendMessage.map(el => {
        return (
            <div key={el.id} className={s.messageF}>
                <div className={s.avatarAndNameF}>
                    <img src='' alt="photo"/>
                    <div className={s.avatarNameF}>{el.name}</div>
                </div>
                <div className={s.messageTextBlockF}>
                    <div className={s.messageTextF}>{el.message}</div>
                </div>
            </div>
        )
    })

    return (
        <div className={s.messageFSection}>
            {friendMessageItems}
        </div>
    )
}
