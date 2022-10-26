export type ActionDispatchType = AddPostActionType | RemovePostTextType | UpdatePostTextType
| AddMessageActionType | UpdateMessageType

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

export type UpdateMessageType = {
    type: "NEW-MESSAGE"
    message: string
}

export type AddPostActionType = {
    type: "ADD-POST"
}

export type RemovePostTextType = {
    type: "REMOVE-POST"
    id: string
}

export type UpdatePostTextType = {
    type: "NEW-POST-TEXT"
    message: string
}

export type PostType = {
    id:string
    message:string
}

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





