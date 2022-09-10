import React from 'react';
import { FaReact } from "react-icons/fa";

function Header() {
  return (
    <div className='app__header'>
      <div className='app__header-title'>
        <FaReact />
        <h3>Social network</h3>
      </div>
    </div>
  )
}

export default Header
