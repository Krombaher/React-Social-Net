import React from 'react'
import user from '../../../assets/Img/user-icon.png'
import { ProfilePostProps } from '../Profile'
import s from './ProfileBlock.module.scss'

export const ProfilePost = (props: ProfilePostProps) => {

  return (
    <div className={s.profilePostSection}>
      <div className={s.profilePostAdd}>
        <h3>My Post</h3>
        <textarea />
        <button>Add post</button>
      </div>

      {
        props.post.map(p => {
          return (
            <div className={s.post}>
              <div className={s.postUser}>
                <img src={user} alt="user-photo" />
                <div>{p.name}</div>
              </div>
              <div className={s.postText}>{p.message}</div>
            </div>
          )
        })
      }
    </div>
  )
}
