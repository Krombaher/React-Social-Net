import React from 'react'
import {ProfileBlock} from './ProfileBlock/ProfileBlock'

type ProfilePostType = {
  id: number
  name: string
  message: string
}

export type ProfilePostProps = {
  post: ProfilePostType[]
}

function Profile(props: ProfilePostProps) {
  return (
    <section className='profile'>
      <ProfileBlock post={props.post}/>
    </section>
  )
}

export default Profile