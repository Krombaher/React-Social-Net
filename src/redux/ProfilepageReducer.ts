import {v1} from "uuid";
import {ActionDispatchType} from "./Type";

export type PostType = {
    id:string
    message:string
}
export type InitialStateType = {
    newPostText: string
    posts: PostType[]
}

let initialState: InitialStateType = {
        newPostText: '',
        posts: [
            {id:v1(), message: 'Hello'}
        ]
}

export const profilePageReducer = (state: InitialStateType = initialState, action: ActionDispatchType): InitialStateType => {

    switch (action.type) {

        case 'ADD-POST':
            let newPost = {id: v1(), message: state.newPostText}
            return {...state, posts:[...state.posts, newPost]}

        case 'NEW-POST-TEXT':
            return {...state, newPostText:action.message}

        case 'REMOVE-POST':
            return {...state, posts:state.posts.filter(p => p.id !== action.id)}

        default:
            return state
    }
}

export const AddPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const UpdateNewPostTextAC = (message:string) => {
    return {type: 'NEW-POST-TEXT', message: message} as const
}
export const RemovePostsAC = (id:string) => {
    return {type: 'REMOVE-POST', id:id} as const
}