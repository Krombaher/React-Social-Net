import {v1} from "uuid";
import {ActionDispatchType, AddPostActionType, RemovePostActionType, UpdatePostActionType} from "./Type";

export type PostType = {
    id:string
    message:string
}

export type InitialStateType = {
    newPostText: string
    posts: PostType[]
}

const ADD_POST = 'ADD-POST';
const REMOVE_POST = 'REMOVE-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

let initialState: InitialStateType = {
        newPostText: '',
        posts: [
            {id:v1(), message: 'Hello'}
        ]
}

export const profilePageReducer = (state: InitialStateType = initialState, action: ActionDispatchType): InitialStateType => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {id: v1(), message: state.newPostText}
            return {...state, posts:[...state.posts, newPost]}

        case NEW_POST_TEXT:
            return {...state, newPostText:action.message}

        case REMOVE_POST:
            return {...state, posts:state.posts.filter(p => p.id !== action.id)}

        default:
            return state
    }
}

export const AddPostActionCreator = ():AddPostActionType => {
    return {type: ADD_POST}
}
export const UpdateNewPostTextActionCreator = (message:string):UpdatePostActionType => {
    return {type: NEW_POST_TEXT, message: message}
}
export const RemovePostsActionCreator = (id:string):RemovePostActionType => {
    return {type: REMOVE_POST, id:id}
}