import React from 'react';
import {AppStateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuthDataTC, logoutTC, setUserDataAC} from "../../redux/AuthReducer";

export type HeaderBlockPropsType = {
    userId: null
    login: null
    email: null
    isAuth: boolean
    getAuthDataTC: () => void
    logoutTC:() => void
}

export class HeaderBlock extends React.Component<HeaderBlockPropsType, any> {
    componentDidMount() {
        this.props.getAuthDataTC()
    }

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
        getAuthDataTC,
        logoutTC
    })(HeaderBlock)
