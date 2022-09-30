import React, { ChangeEvent, useState } from 'react'
import user from '../../../assets/Img/user-icon.png'
import { AiOutlineDelete } from "react-icons/ai";
import { ProfilePostProps } from '../Profile'
import s from './ProfileBlock.module.scss'

export const ProfilePost = (props: ProfilePostProps) => {

  const [newPost, setNewPost] = useState('');

  const addPostHandler = () => {
    props.addPost(newPost)
    setNewPost('')
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPost(event.currentTarget.value)
  }

  const removePostHandler = (id:string) => {
    props.removePost(id)
  }

  const profilePost = props.post.map(p => {
    return (
      <div key={p.id} className={s.post}>
        <div className={s.postUser}>
          <img src={user} alt="user-photo" />
          <div>Name</div>
        </div>
        <div className={s.postText}>{p.message}</div>
        <button className={s.removeBtn} onClick={() => removePostHandler(p.id)}><AiOutlineDelete /></button>
      </div>
    )
  })

  return (
    <div className={s.profilePostSection}>
      <div className={s.profilePostAdd}>
        <h3>My Post</h3>
        <input value={newPost} onChange={onChangeHandler}/>
        <button className={s.button} onClick={addPostHandler}>Add Post</button>
      </div>
      {profilePost}
    </div>
  )
}
