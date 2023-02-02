import {Dispatch} from "react";
import {deleteFollowUser, getUsers, postFollowUser} from "../Api/Api";

type UsersReducerAT =
    FollowAT
    | UnFollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | SetIsFetchingAT
    | SetFollowingProgressAT

type FollowAT = ReturnType<typeof followAC>
type UnFollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>
type SetIsFetchingAT = ReturnType<typeof setIsFetchingAC>
type SetFollowingProgressAT = ReturnType<typeof setFollowingProgressAC>

export type UsersType = {
    id: number
    photos: {
        small: null
        large: null
    }
    name: string
    followed: boolean
}

export type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAT): InitialStateType => {
    switch (action.type) {

        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}

        case 'SET_USERS':
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: action.users}

        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET_IS_FETCHING':
            return {...state, isFetching: action.isFetching}

        case 'SET_FOLLOWING_PROGRESS':
            return {
                ...state,
                    followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default :
            return state
    }
}
//Action
export const followAC = (userID: number) => {
    return {type: 'FOLLOW', userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: 'UNFOLLOW', userID} as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {type: 'SET_USERS', users} as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET_CURRENT_PAGE', currentPage} as const
}

export const setIsFetchingAC = (isFetching: boolean) => {
    return {type: 'SET_IS_FETCHING', isFetching} as const
}

export const setFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {type: 'SET_FOLLOWING_PROGRESS', isFetching, userId} as const
}
//Thunk

export const getUsersTC = (currentPage: number, pageSize: number ) => (dispatch:Dispatch<UsersReducerAT>) => {
    dispatch(setIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    getUsers(currentPage,pageSize).then(data => {
        dispatch(setIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
    })
}

export const followTC = (userID: number) => (dispatch:Dispatch<UsersReducerAT>) => {
    dispatch(setFollowingProgressAC(true,userID))
    postFollowUser(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userID))
            }
            dispatch(setFollowingProgressAC(false, userID))

        })
}

export const unfollowTC = (userID: number) => (dispatch:Dispatch<UsersReducerAT>) => {
    dispatch(setFollowingProgressAC(true,userID))
    deleteFollowUser(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userID))
            }
            dispatch(setFollowingProgressAC(false, userID))

        })
}
