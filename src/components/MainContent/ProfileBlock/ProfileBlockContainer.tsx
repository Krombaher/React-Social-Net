import React from 'react'
import {AppStateType} from "../../../redux/Redux-store";
import {connect} from "react-redux";
import {
    addPostAC, changeStatusTC, getProfileUserTC, getUserStatusTC,
    PostType, ProfileType,
    removePostsAC,
    setUserProfileAC,
} from "../../../redux/reducers/ProfilepageReducer";
import {ProfileInfo} from "./ProfileInfo";
import {ProfilePost} from "./ProfilePost";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

export type ProfileBlockContainerPropsType = {
    posts: PostType[]
    profile: ProfileType | null
    addPostAC: (values: any) => void
    removePostsAC: (id: string) => void
    setUserProfileAC: (profile: null) => void
    getProfileUserTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    changeStatusTC: (status: string) => void
    status: string
    userId: null
    isAuth:boolean
}

type MapStatePropsType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
    userId: null
    isAuth:boolean
}

type PathParamsType = {
    userId: string,
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & ProfileBlockContainerPropsType

export class ProfileBlockContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) { // @ts-ignore
            userId = this.props.userId

            // if (!userId) { // @ts-ignore
            //     this.props.history.push('/login')
            // }
            //
        }
        this.props.getProfileUserTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {
        return (
            <>
                <ProfileInfo
                    profile={this.props.profile}
                    status={this.props.status}
                    changeStatusTC={this.props.changeStatusTC}
                />
                <
                    ProfilePost
                    {...this.props}
                />
            </>

        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.authPage.userId,
        isAuth: state.authPage.isAuth
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,
        {
            addPostAC,
            removePostsAC,
            setUserProfileAC,
            getProfileUserTC,
            getUserStatusTC,
            changeStatusTC
        })
)(ProfileBlockContainer)

