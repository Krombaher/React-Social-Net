import React from 'react'
import {AppStateType} from "../../../redux/Redux-store";
import {connect} from "react-redux";
import {
    addPostAC, changeStatusTC, getProfileUserTC, getUserStatusTC,
    PostType, ProfileType,
    removePostsAC,
    setUserProfileAC,
    updateNewPostTextAC
} from "../../../redux/ProfilepageReducer";
import {ProfileInfo} from "./ProfileInfo";
import {ProfilePost} from "./ProfilePost";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

export type ProfileBlockContainerPropsType = {
    newPostText: string
    posts: PostType[]
    profile: ProfileType | null
    addPost: () => void
    updateMessagePost: (message: string) => void
    removePost: (id: string) => void
    setUserProfileAC: (profile: null) => void
    getProfileUserTC:(userId:string) => void
    getUserStatusTC:(userId:string) => void
    changeStatusTC:(status:string) => void
    status: string
}

type MapStatePropsType = {
    newPostText: string
    posts: PostType[]
    profile: ProfileType | null
    status: string
}

type PathParamsType = {
    userId: string,
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & ProfileBlockContainerPropsType

export class ProfileBlockContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {userId = "26603"}
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
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        addPost: addPostAC,
        updateMessagePost: updateNewPostTextAC,
        removePost: removePostsAC,
        setUserProfileAC: setUserProfileAC,
        getProfileUserTC: getProfileUserTC,
        getUserStatusTC,
        changeStatusTC
    })
)(ProfileBlockContainer)

