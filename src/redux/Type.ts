import {
    addPostAC,
    PostType, removePostsAC,
    setUserProfileAC, setUserStatusAC,
} from "./reducers/ProfilepageReducer";
import {AddMessageAC, RemoveMessageAC, UpdateMessageAC} from "./reducers/DialogpageReducer";
import {getAuthDataTC, setUserDataAC} from "./reducers/AuthReducer";
import {initializedAC} from "./reducers/AppReducer";

export type ActionDispatchType = AddPostActionType | RemovePostActionType
    | AddMessageActionType | UpdateMessageActionType | RemoveMessageActionType |
    SetUserProfileAT | SetUserDataAT | SetUserStatusAT | InitializedAT

//Message type action
export type AddMessageActionType = ReturnType<typeof AddMessageAC>
export type UpdateMessageActionType = ReturnType<typeof UpdateMessageAC>
export type RemoveMessageActionType = ReturnType<typeof RemoveMessageAC>
//Post type action
export type AddPostActionType = ReturnType<typeof addPostAC>
export type RemovePostActionType = ReturnType<typeof removePostsAC>
//Profile
export type SetUserProfileAT = ReturnType<typeof setUserProfileAC>
export type SetUserStatusAT = ReturnType<typeof setUserStatusAC>
//auth
export type SetUserDataAT = ReturnType<typeof setUserDataAC>
//appReducer
export type InitializedAT = ReturnType<typeof initializedAC>
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





