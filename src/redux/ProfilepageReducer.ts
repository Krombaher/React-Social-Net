import {v1} from "uuid";
import {ActionDispatchType, AddPostActionType, ProfilePageType, RemovePostTextType, UpdatePostTextType} from "./Type";

const ADD_POST = 'ADD-POST';
const REMOVE_POST = 'REMOVE-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

let initialState = {
        newPostText: '',
        posts: [
            {id:v1(), message: 'Hello'}
        ]
}

export const profilePageReducer = (state:ProfilePageType = initialState, action: ActionDispatchType) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: state.newPostText
            }
            state.posts = [newPost, ...state.posts]

            return state
        }

        case NEW_POST_TEXT: {
            state.newPostText =  action.message
            return state
        }


        case REMOVE_POST: {
            state.posts = state.posts.filter(p => p.id !== action.id)
            return state
        }

        default: return state
    }
}

export const AddPostActionCreator = () => {return <AddPostActionType>{type: ADD_POST}}
export const UpdateNewPostTextActionCreator = (message:string) => {return<UpdatePostTextType>{type: NEW_POST_TEXT, message: message}}
export const RemovePostsActionCreator = (id:string) => {return<RemovePostTextType>{type: REMOVE_POST, id:id}}