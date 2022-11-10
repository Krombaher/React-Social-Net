import {
    AddPostActionCreator, PostType,
    RemovePostsActionCreator,
    UpdateNewPostTextActionCreator
} from "../../../redux/ProfilepageReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";
import {Dispatch} from "redux";
import {ProfilePost} from "./ProfilePost";

type MapStatePropsType = {
    newPostText:string
    posts:PostType[]
}

type MapDispatchPropsType = {
    addPost:() => void
    updateMessagePost:(message:string) => void
    removePost:(id:string) => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPost:() => {
            dispatch(AddPostActionCreator())
        },
        updateMessagePost:(message:string) => {
            dispatch(UpdateNewPostTextActionCreator(message))
        },
        removePost:(id:string) => {
            dispatch(RemovePostsActionCreator(id))
        }
    }
}

export const ProfilePostContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePost)
