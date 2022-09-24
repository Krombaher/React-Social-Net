import React from 'react'
import { ProfilePostProps } from '../Profile'
import { ProfileInfo } from './ProfileInfo'
import { ProfilePost } from './ProfilePost'

export const ProfileBlock = (props:ProfilePostProps) => {
  return (
    <div className='app__profile'>
      <ProfileInfo/>
      <ProfilePost post={props.post}/>
    </div>
  )
}
