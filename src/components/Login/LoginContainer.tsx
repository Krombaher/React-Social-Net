import React from 'react'
import {connect} from "react-redux";
import {Login} from "./Login";
import {loginTC} from "../../redux/reducers/AuthReducer";
import {AppStateType} from "../../redux/Redux-store";

export type LoginContainerPropsType = {
    loginTC:(email:string, password:string, rememderMe: boolean) => void
    isAuth:boolean
}

export type MapStatePropsType = {
    isAuth:boolean
}

export class LoginContainer extends React.Component<LoginContainerPropsType, any> {
    componentDidMount() {

    }

    render() {
        return (
            <Login isAuth={this.props.isAuth} loginTC={this.props.loginTC}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.authPage.isAuth
    }
}

export default connect(mapStateToProps, {
    loginTC
})(LoginContainer)

