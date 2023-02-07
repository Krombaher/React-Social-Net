import React from 'react';
import {AppStateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {Header} from "./Header";
import {logoutTC, setUserDataAC} from "../../redux/reducers/AuthReducer";

export type HeaderBlockPropsType = {
    userId: null
    login: null
    email: null
    isAuth: boolean
    logoutTC:() => void
}

export class HeaderBlock extends React.Component<HeaderBlockPropsType, any> {

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        userId: state.authPage.userId,
        email: state.authPage.email,
        login: state.authPage.login,
        isAuth: state.authPage.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps,
    {
        setUserDataAC,
        logoutTC
    })(HeaderBlock)
