import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

import s from './NavBar.module.scss'

function NavBar() {
  return (
    <div className={s.nav}>
      <ul>
        <li>
          <Link className={s.navLink} to='/profile'><CgProfile /><text>Profile</text></Link>
        </li>
        <li>
          <Link className={s.navLink} to='/photos'><MdOutlineAddAPhoto /><text>Photos</text></Link>
        </li>
        <li>
          <Link className={s.navLink} to='/message'><TiMessages /><text>Message</text></Link>
        </li>
        <li>
          <Link className={s.navLink} to='/settings'><FiSettings /><text>Settings</text></Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
