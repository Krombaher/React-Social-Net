import {v1} from "uuid";
import {ActionDispatchType} from "../Type";
import {Dispatch} from "react";
import {getProfileUser, getUserStatus, putUserStatus} from "../../Api/Api";

export type PostType = {
    id:string
    message:string
}
export type InitialStateType = {
    newPostText: string
    posts: PostType[]
    profile: ProfileType | null
    status: string
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
    profile: null,
    status: ''
}

export const profilePageReducer = (state: InitialStateType = initialState, action: ActionDispatchType): InitialStateType => {

    switch (action.type) {

        case 'ADD-POST':
            let newPost = {
                id: v1(),
                message: action.newPostText
            }
            return {...state, posts:[...state.posts, newPost]}

        case 'REMOVE-POST':
            return {...state, posts:state.posts.filter(p => p.id !== action.id)}

        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}

        case 'SET_USER_STATUS':
            return {...state, status: action.status}

        default:
            return state
    }
}
//Action
export const addPostAC = (newPostText:any) => {
    return {type: 'ADD-POST', newPostText} as const
}

export const removePostsAC = (id:string) => {
    return {type: 'REMOVE-POST', id:id} as const
}



//ProfileUser/StatusAC
export const setUserProfileAC = (profile:null) => {
    return {type: 'SET_USER_PROFILE', profile} as const
}
export const setUserStatusAC = (status:string) => {
    return {type: 'SET_USER_STATUS', status} as const
}

//Thunk
export const getProfileUserTC = (userId:string) => (dispatch:Dispatch<ActionDispatchType>) => {
    getProfileUser(userId)
        .then(data => dispatch(setUserProfileAC(data)))
}

export const getUserStatusTC = (userId:string) => (dispatch:Dispatch<ActionDispatchType>) => {
    getUserStatus(userId)
        .then(data => dispatch(setUserStatusAC(data)))
}

export const changeStatusTC = (status:string) => (dispatch:Dispatch<ActionDispatchType>) => {
    putUserStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
}