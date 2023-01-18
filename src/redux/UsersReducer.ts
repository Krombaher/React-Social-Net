type UsersReducerAT = FollowAT | UnFollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT

type FollowAT = ReturnType<typeof followAC>
type UnFollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>

export type UsersType = {
    id: string
    photos:{
        small: null
        large: null
    }
    name:string
    followed:boolean
}

export type InitialStateType = {
    users:UsersType[]
    pageSize:number
    totalUsersCount: number
    currentPage: number
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const UsersReducer = (state: InitialStateType = initialState, action: UsersReducerAT): InitialStateType => {
    switch (action.type) {

        case 'FOLLOW':
            return {...state, users:state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}

        case 'UNFOLLOW':
            return {...state, users:state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}

        case 'SET_USERS':
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: action.users}

        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

        default :
            return state
    }
}

export const followAC = (userID:string) => {
    return {type: 'FOLLOW', userID} as const
}
export const unfollowAC = (userID:string) => {
    return {type: 'UNFOLLOW', userID} as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {type: 'SET_USERS', users} as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const
}

export const setCurrentPageAC = (currentPage:number) => {
    return {type: 'SET_CURRENT_PAGE', currentPage} as const
}

