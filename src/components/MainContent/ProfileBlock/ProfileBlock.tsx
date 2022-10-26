import React from 'react'
import {ProfileInfo} from './ProfileInfo'
import {ProfilePostContainer} from "./ProfilePostContainer";

export const ProfileBlock = () => {
    return (
        <div className='app__profile'>
            <ProfileInfo/>
            <ProfilePostContainer/>
        </div>
    )
}
