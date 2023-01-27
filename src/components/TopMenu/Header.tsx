import React from 'react';
import {FaReact} from "react-icons/fa";
import NavBar from '../LeftMEnu/NavBar';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    userId: null
    login: null
    email: null
    isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {

    console.log(props)

    return (
        <header className={s.header}>
            <div className='_container'>
                <div className={s.headerTop}>
                    <div className={s.headerLogo}>
                        <FaReact/> <h3>Social network</h3>
                    </div>
                    <NavBar/>
                    <div>
                      {
                        props.isAuth
                            ? props.login
                            : <NavLink to={'/login'}>Login</NavLink>
                      }
                    </div>
                </div>
            </div>
        </header>
    )
}


