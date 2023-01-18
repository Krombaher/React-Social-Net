import React, {ChangeEvent} from 'react'
import user from '../../../assets/Img/user-icon.png'
import {AiOutlineDelete} from "react-icons/ai";
import s from './ProfileBlock.module.scss'
import {Button} from "@mui/material";
import {PostType} from "../../../redux/ProfilepageReducer";

export type ProfilePostProps = {
    newPostText: string
    posts: PostType[]
    addPost: () => void
    removePost: (id: string) => void
    updateMessagePost: (message: string) => void
}

export const ProfilePost = (props: ProfilePostProps) => {

    const addPostHandler = () => {
        props.addPost()
        props.updateMessagePost('')
    }
    const updateMessagePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessagePost(event.currentTarget.value)
    }
    const removePostHandler = (id: string) => {
        props.removePost(id)
    }

    const profilePost = props.posts.map(p => {
        return (
            <div key={p.id} className={s.post}>
                <div className={s.postUser}>
                    <img src={user} alt="user-photo"/>
                    <div>Name</div>
                </div>
                <div className={s.postText}>{p.message}</div>
                <button className={s.removeBtn} onClick={() => removePostHandler(p.id)}><AiOutlineDelete/></button>
            </div>
        )
    })

    return (
        <div className={s.profilePostSection}>
            <div className={s.profilePostAdd}>
                <h3>My Post</h3>
                <textarea value={props.newPostText} onChange={updateMessagePost}/>
                <Button style={{width: '150px'}} onClick={addPostHandler} variant="contained">Add Post</Button>
            </div>
            {profilePost}
        </div>
    )
}
