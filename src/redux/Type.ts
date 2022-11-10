import {PostType} from "./ProfilepageReducer";

export type ActionDispatchType = AddPostActionType | RemovePostActionType | UpdatePostActionType

| AddMessageActionType | UpdateMessageActionType | RemoveMessageActionType

//Message type action

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

export type UpdateMessageActionType = {
    type: "NEW-MESSAGE"
    message: string
}

export type RemoveMessageActionType = {
    type: "REMOVE_MESSAGE"
    id: string
}

//Post type action

export type AddPostActionType = {
    type: "ADD-POST"
}

export type RemovePostActionType = {
    type: "REMOVE-POST"
    id: string
}

export type UpdatePostActionType = {
    type: "NEW-POST-TEXT"
    message: string
}

//Type all

export type MessageType = {
    id: string
    photo:string
    name:string
    message:string
}

export type ProfilePageType = {
    newPostText: string
    posts: PostType[]
}

export type MessagePageType = {
    newMessage: string
    messages:MessageType[]
}

export type StateType = {
    profilePage:ProfilePageType
    messagePage:MessagePageType

}

export type StoreReduxType = {
    getState:() => StateType
    dispatch:(action:ActionDispatchType) => void
    subscribe:(observer:() => void) => void
}





