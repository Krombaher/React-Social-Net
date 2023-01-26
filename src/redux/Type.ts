import {
    addPostAC,
    PostType, removePostsAC,
    setUserProfileAC,
    updateNewPostTextAC,

} from "./ProfilepageReducer";
import {AddMessageAC, RemoveMessageAC, UpdateMessageAC} from "./DialogpageReducer";
import {followAC, unfollowAC} from "./UsersReducer";
import {setUserDataAC} from "./AuthReducer";

export type ActionDispatchType = AddPostActionType | RemovePostActionType | UpdatePostActionType
    | AddMessageActionType | UpdateMessageActionType | RemoveMessageActionType | FollowAT | UnFollowAT |
    SetUserProfileACActionType | SetUserDataAT

//Message type action
export type AddMessageActionType = ReturnType<typeof AddMessageAC>
export type UpdateMessageActionType = ReturnType<typeof UpdateMessageAC>
export type RemoveMessageActionType = ReturnType<typeof RemoveMessageAC>
//Post type action
export type AddPostActionType = ReturnType<typeof addPostAC>
export type RemovePostActionType = ReturnType<typeof updateNewPostTextAC>
export type UpdatePostActionType = ReturnType<typeof removePostsAC>
export type SetUserProfileACActionType = ReturnType<typeof setUserProfileAC>
//Users type action
export type FollowAT = ReturnType<typeof followAC>
export type UnFollowAT = ReturnType<typeof unfollowAC>
//auth
export type SetUserDataAT = ReturnType<typeof setUserDataAC>


//Type all

export type MessageType = {
    id: string
    photo: string
    name: string
    message: string
}

export type ProfilePageType = {
    newPostText: string
    posts: PostType[]
}

export type MessagePageType = {
    newMessage: string
    messages: MessageType[]
}

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType

}

export type StoreReduxType = {
    getState: () => StateType
    dispatch: (action: ActionDispatchType) => void
    subscribe: (observer: () => void) => void
}





