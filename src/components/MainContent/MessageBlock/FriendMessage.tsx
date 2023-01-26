import React from 'react'
import s from '../MessageBlock/FriendMessage.module.scss'
import user from "../../../assets/Img/user-icon.png";
import {v1} from "uuid";

export const FriendMessage = () => {
    const friendMessage = [
        {id: v1(), photo: 'img', name: 'Victor', message: 'Hello'},
    ]

    const friendMessageItems = friendMessage.map(el => {
        return (
            <div key={el.id} className={s.message}>
                <div className={s.avatarAndName}>
                    <img src={user} alt="photo"/>
                    <div className={s.avatarName}>{el.name}</div>
                </div>
                <div className={s.messageTextBlock}>
                    <div className={s.messageText}>{el.message}</div>
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
