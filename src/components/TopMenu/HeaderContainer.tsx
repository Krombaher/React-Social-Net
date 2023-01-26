import React from 'react';
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/AuthReducer";

export class HeaderBlock extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    console.log(response)
                    let {id, login, email} = response.data.data
                    this.props.setUserDataAC(id, login, email)
                }
            })
    }

    render() {
        return (
            <>
                <Header/>
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        userId: state.authPage.userId,
        email: state.authPage.email,
        login: state.authPage.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setUserDataAC})(HeaderBlock)
