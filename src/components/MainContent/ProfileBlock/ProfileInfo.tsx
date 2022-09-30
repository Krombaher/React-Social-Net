import React from 'react'
import s from './ProfileBlock.module.scss'
import user from '../../../assets/Img/user-icon.png'
export const ProfileInfo = () => {
  return (
    <div className={s.profileInfoSection}>
      <div className={s.profileUser}>
        <div className={s.profileStatus}>
          <div className={s.statusName}>Kazhuro Vitaly</div>
          <div className={s.statusOnline}>Online</div>
        </div>
        <img src={user} alt={'photo'}/>
        <button className={s.button}>Edit</button>
      </div>
      <div className={s.profileUserInfo}>
        <div className={s.userInfo}>
          <h3>Information</h3>
          <div>data:</div>
          <div>Location:</div>
          <a>Show detailed information</a>
        </div>
      </div>
    </div>
  )
}
