import React, {ChangeEvent, useState} from 'react'
import user from '../../../assets/Img/user-icon.png'
import {AiOutlineDelete} from "react-icons/ai";
import s from './ProfileBlock.module.scss'
import {PostType} from "../../../redux/Type";
import {Button, Rating, Stack} from "@mui/material";

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
            <div>
                <div key={p.id} className={s.post}>
                    <div className={s.postUser}>
                        <img src={user} alt="user-photo"/>
                        <div>Name</div>
                    </div>
                    <div className={s.postText}>{p.message}</div>
                    <button className={s.removeBtn} onClick={() => removePostHandler(p.id)}><AiOutlineDelete/></button>
                </div>
                <div className={s.rating}>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                    </Stack>
                </div>
            </div>
        )
    })

    return (
        <div className={s.profilePostSection}>
            <div className={s.profilePostAdd}>
                <h3>My Post</h3>
                <textarea value={props.newPostText} onChange={updateMessagePost}/>
                <Button style={ { width: '150px'} } onClick={addPostHandler} variant="contained">Add Post</Button>
                {/*<button className={s.button} onClick={addPostHandler}>Add Post</button>*/}
            </div>
            {profilePost}
        </div>
    )
}
