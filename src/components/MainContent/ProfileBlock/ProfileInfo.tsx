import React from 'react'
import s from './ProfileBlock.module.scss'
import CircularIndeterminate from "../../Progress/CircularIndeterminate";
import {ProfileType} from "../../../redux/ProfilepageReducer";
import {ProfileStatus} from "./ProfileStatus";
import user from "../../../assets/Img/user-icon.png";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    changeStatusTC:(status:string) => void
    status: string
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) {
        return <CircularIndeterminate/>
    }
    return (
        <div key={props.profile.userId} className={s.profileInfoSection}>
            <div className={s.profileUser}>
                <div className={s.profileStatus}>
                    <div className={s.statusName}>{props.profile.fullName}</div>
                </div>
                <img src={props.profile.photos.small != null ? props.profile.photos.small : user} alt={'img'}/>
            </div>
            <div className={s.profileUserInfo}>
                <div className={s.userInfo}>
                    <ProfileStatus
                        userId={props.profile.userId}
                        status={props.status}
                        changeStatusTC={props.changeStatusTC}
                    />
                    <span>{props.profile.contacts.github}</span>
                    <span>{props.profile.contacts.vk}</span>
                    <span>{props.profile.contacts.facebook}</span>
                    <span>{props.profile.contacts.instagram}</span>
                    <span>{props.profile.contacts.twitter}</span>
                    <span>{props.profile.contacts.website}</span>
                    <span>{props.profile.contacts.youtube}</span>
                    <span>{props.profile.contacts.mainLink}</span>
                </div>
            </div>
        </div>
    )
}
