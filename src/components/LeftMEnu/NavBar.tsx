import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

function NavBar() {
  return (
    <div className='app__nav'>
      <ul>
        <li>
          <Link className='link' to='/profile'><CgProfile />Profile</Link>
        </li>
        <li>
          <Link className='link' to='/photos'><MdOutlineAddAPhoto />Photos</Link>
        </li>
        <li>
          <Link className='link' to='/message'><TiMessages />Message</Link>
        </li>
        <li>
          <Link className='link' to='/settings'><FiSettings />Settings</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
