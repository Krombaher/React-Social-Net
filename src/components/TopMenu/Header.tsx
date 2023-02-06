import React from 'react';
import {FaReact} from "react-icons/fa";
import {NavBar} from '../LeftMEnu/NavBar';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {BiLogIn} from "react-icons/bi";

export type HeaderPropsType = {
    userId: null
    login: null
    email: null
    isAuth: boolean
    logoutTC: () => void
}

export const Header = (props: HeaderPropsType) => {
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
                                ?
                                <div className={s.logout}> {props.login}
                                    <button className={s.logoutBtn} onClick={props.logoutTC}><BiLogIn/></button>
                                </div>
                                :
                                <NavLink to={'/login'}>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}


