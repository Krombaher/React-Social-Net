import React from 'react'
import user from '../../../assets/Img/user-icon.png'
import {AiOutlineDelete} from "react-icons/ai";
import s from './ProfileBlock.module.scss'
import {PostType} from "../../../redux/reducers/ProfilepageReducer";
import {ProfilePostForm} from "./ProfilePostForm";
import {reduxForm} from "redux-form";

export type ProfilePostProps = {
    posts: PostType[]
    addPostAC: (values:any) => void
    removePostsAC: (id: string) => void
}

export const ProfilePost = (props: ProfilePostProps) => {

    let onAddPost = (values:any) => props.addPostAC(values.newPostText)
    const removePostHandler = (id: string) => props.removePostsAC(id)

    const profilePost = props.posts.map(p => {
        return (
            <div key={p.id} className={s.post}>
                <div className={s.postUser}>
                    <img src={user} alt="user-photo"/>
                    <div>Name</div>
                </div>
                <div className={s.postText}>{p.message}</div>
                <button
                    className={s.removeBtn}
                    onClick={() => removePostHandler(p.id)}>
                    <AiOutlineDelete/>
                </button>
            </div>
        )
    })

    return (
        <div className={s.profilePostSection}>
            <h3>My Post</h3>
            <ProfilePostReduxForm onSubmit={onAddPost}/>
            {profilePost}
        </div>
    )
}

const ProfilePostReduxForm = reduxForm({
    form:'profilePostForm'
}) (ProfilePostForm)
