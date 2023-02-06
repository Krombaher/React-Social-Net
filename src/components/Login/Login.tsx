import React from "react";
import s from './Login.module.scss'
import {LoginReduxForm} from "./LoginForm";
import {Redirect} from "react-router-dom";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginPropsType = {
    loginTC: (email: string, password: string, rememderMe: boolean) => void
    isAuth: boolean
}

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.login}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>

            <span>Email: free@samuraijs.com</span>
            <span>Password: free</span>
        </div>
    )
}
