import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../../redux/UsersReducer";

import React from "react";
import axios from "axios";
import {Users} from "./Users";
import CircularIndeterminate from "../../Progress/Progress";

export type UsersAPIComponentPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    addFollowUser: (userID: string) => void
    removeFollowUser: (userID: string) => void
    setUser: (users: UsersType[]) => void
    setTotalUsersCountAC: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
}

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    addFollowUser: (userID: string) => void
    removeFollowUser: (userID: string) => void
    setUser: (users: UsersType[]) => void
    setTotalUsersCountAC: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, any> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUser(response.data.items)
                this.props.setTotalUsersCountAC(response.data.totalCount)
            })

    }

    onPageChanged = (pagesCount: number) => {
        this.props.setCurrentPage(pagesCount);
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesCount}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUser(response.data.items)
            })

    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ?
                        <CircularIndeterminate/>
                        :
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
                }
            </>

        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addFollowUser: (userID: string) => {
            dispatch(followAC(userID))
        },
        removeFollowUser: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCountAC: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect(
    mapStateToProps, {
        addFollowUser: followAC,
        removeFollowUser: unfollowAC,
        setUser: setUsersAC,
        setTotalUsersCountAC: setTotalUsersCountAC,
        setCurrentPage: setCurrentPageAC,
        setIsFetching: setIsFetchingAC
    }
)(UsersAPIComponent)
