import React from 'react'
import axios from "axios";
import {AppStateType} from "../../../redux/Redux-store";
import {connect} from "react-redux";
import {
    addPostAC,
    PostType, ProfileType,
    removePostsAC,
    setUserProfileAC,
    updateNewPostTextAC
} from "../../../redux/ProfilepageReducer";
import {ProfileInfo} from "./ProfileInfo";
import {ProfilePost} from "./ProfilePost";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getProfileUser} from "../../../Api/Api";

export type ProfileBlockContainerPropsType = {
    newPostText: string
    posts: PostType[]
    profile: ProfileType | null
    addPost: () => void
    updateMessagePost: (message: string) => void
    removePost: (id: string) => void
    setUserProfileAC: (profile: null) => void
}

type MapStatePropsType = {
    newPostText: string
    posts: PostType[]
    profile: ProfileType | null
}

type PathParamsType = {
    userId: string,
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & ProfileBlockContainerPropsType

export class ProfileBlockContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {userId = '2'}

        getProfileUser(userId)
            .then(data => this.props.setUserProfileAC(data))
    }

    render() {
        return (
            <>
                <ProfileInfo profile={this.props.profile}/>
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
        profile: state.profilePage.profile
    }
}

let WithURLDataContainerComponent = withRouter(ProfileBlockContainer)

export const ProfileContainer = connect(mapStateToProps,
    {
        addPost: addPostAC,
        updateMessagePost: updateNewPostTextAC,
        removePost: removePostsAC,
        setUserProfileAC: setUserProfileAC
    })(WithURLDataContainerComponent)