import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../../redux/UsersReducer";

type MapStatePropsType = {
    users: UsersType[]
    pageSize:number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    addFollowUser:(userID:string) => void
    removeFollowUser:(userID:string) => void
    setUser:(users: UsersType[]) => void
    setTotalUsersCountAC:(totalUsersCount: number) => void
    setCurrentPage:(currentPage:number) => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addFollowUser: (userID:string) => {
            dispatch(followAC(userID))
        },
        removeFollowUser: (userID:string) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCountAC:(totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage: (currentPage:number) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
