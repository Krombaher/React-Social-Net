import React from 'react'
import {NavLink} from 'react-router-dom';
import {CgProfile} from "react-icons/cg";
import {FiSettings} from "react-icons/fi";
import {TiMessages} from "react-icons/ti";
import s from './NavBar.module.scss'

export const NavBar = () => {
    return (
        <div className={s.nav}>
            <ul>
                <li>
                    <NavLink className={(isActive) => isActive ? s.active : ''} to='/profile'><CgProfile/>
                        <text>Profile</text>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive) => isActive ? s.active : ''} to='/message'><TiMessages/>
                        <text>Message</text>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive) => isActive ? s.active : ''} to='/users'><FiSettings/>
                        <text>Users</text>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

