import React from 'react'
import user from '../../../assets/Img/user-icon.png'
import s from './ProfileBlock.module.scss'

export const ProfileInfo = () => {
  return (
    <div className={s.statusSection}>
      <div className={s.status}>
        <div className={s.statusName}>Kazhuro Vitaly</div>
        <div className={s.statusCurrent}>Online</div>
      </div>
      <div className={s.profileInfo}>
        <img src={user} alt='profile-photo'/>
        <div className={s.profileAbout}>
          <div className={s.aboutName}>
            <h3>Kazhuro Vitaly</h3>
            <p>set a status message</p>
          </div>
          <div className={s.profileInformation}>
            <h3>Information</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Culpa doloremque similique reprehenderit architecto in officiis,
              sed perspiciatis autem maiores sint, aut ad, dignissimos porro.
              Consectetur sequi sint quidem cumque consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
