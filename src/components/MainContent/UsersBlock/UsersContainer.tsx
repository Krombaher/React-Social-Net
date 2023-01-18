import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../../redux/UsersReducer";

import React from "react";
import axios from "axios";
import {Users} from "./Users";

export type UsersAPIComponentPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    addFollowUser: (userID: string) => void
    removeFollowUser: (userID: string) => void
    setUser: (users: UsersType[]) => void
    setTotalUsersCountAC: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

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

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
                this.props.setTotalUsersCountAC(response.data.totalCount)
            })

    }

    onPageChanged = (pagesCount: number) => {
        this.props.setCurrentPage(pagesCount);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesCount}&count=${this.props.pageSize}`)
            .then(response => this.props.setUser(response.data.items))

    }

    render() {
        return (
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                addFollowUser={this.props.addFollowUser}
                removeFollowUser={this.props.removeFollowUser}
                setUser={this.props.setUser}
                setTotalUsersCountAC={this.props.setTotalUsersCountAC}
                setCurrentPage={this.props.setCurrentPage}
                onPageChanged={this.onPageChanged}
            />
        )
    }
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
