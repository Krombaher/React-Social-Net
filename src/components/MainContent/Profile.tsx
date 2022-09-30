import React, { useState } from 'react'
import {ProfileBlock} from './ProfileBlock/ProfileBlock'

export type ProfilePostType = {
  id: string
  message: string
}

export type ProfilePostProps = {
  post: ProfilePostType[]
  addPost:(newMessage:string) => void
  removePost:(id:string) => void
}

function Profile(props: ProfilePostProps) {

  return (
    <section className='profile'>
      <ProfileBlock post={props.post} addPost={props.addPost} removePost={props.removePost}/>
    </section>
  )
}

export default Profile