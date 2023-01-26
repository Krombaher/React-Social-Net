import {v1} from "uuid";
import {ActionDispatchType} from "./Type";
import {Dispatch} from "react";
import {getProfileUser} from "../Api/Api";

export type PostType = {
    id:string
    message:string
}
export type InitialStateType = {
    newPostText: string
    posts: PostType[]
    profile: ProfileType | null
}

//Profile TYpe
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

//---

let initialState: InitialStateType = {
        newPostText: '',
        posts: [],
        profile: null
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

        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}

        default:
            return state
    }
}
//Action
export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const updateNewPostTextAC = (message:string) => {
    return {type: 'NEW-POST-TEXT', message: message} as const
}
export const removePostsAC = (id:string) => {
    return {type: 'REMOVE-POST', id:id} as const
}
export const setUserProfileAC = (profile:null) => {
    return {type: 'SET_USER_PROFILE', profile} as const
}
//Thunk
export const getProfileUserTC = (userId:string) => (dispatch:Dispatch<ActionDispatchType>) => {
    getProfileUser(userId)
        .then(data => dispatch(setUserProfileAC(data)))
}