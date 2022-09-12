import React from 'react'
import photo from '../../../assets/Img/my-photo.jpg'

function ProfileInfo() {
  return (
    <div className='app__profile'>
      <div className='app__status'>
        <div className='app__status-name'>Kazhuro Vitaly</div>
        <div className='app__status-сurrent'>Online</div>
      </div>
      <div className='app__profile-info'>
        <img src={photo} alt='my-photo' />
        <div className='app__profile-about'>
          <div className='profile__about-name'>
            <h3>Kazhuro Vitaly</h3>
            <p>set a status message</p>
          </div>
          <div className='profile__information'>
            <h3>Information</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Culpa doloremque similique reprehenderit architecto in officiis,
              sed perspiciatis autem maiores sint, aut ad, dignissimos porro.
              Consectetur sequi sint quidem cumque consequatur.</p>
          </div>
          <div className='app_profile-post'>
            <h3>My Post</h3>
            <textarea />
            <button>Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;