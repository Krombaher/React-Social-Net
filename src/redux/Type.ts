export type ActionDispatchType = AddPostActionType | RemovePostTextType | UpdatePostTextType

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

export type DialogPageType = {
    message:MessageType[]
}

export type StateType = {
    profilePage:ProfilePageType
    // dialogPage:DialogPageType
}

export type StoreReduxType = {
    getState:() => StateType
    dispatch:(action:ActionDispatchType) => void
    subscribe:(observer:() => void) => void
}





