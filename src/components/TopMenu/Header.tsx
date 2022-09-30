import React from 'react';
import { FaReact } from "react-icons/fa";
import NavBar from '../LeftMEnu/NavBar';
import s from './Header.module.scss'

function Header() {
  return (
    <header className={s.header}>
      <div className='_container'>
        <div className={s.headerTop}>
          <div className={s.headerLogo}>
            <FaReact /> <h3>Social network</h3>
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  )
}

export default Header
