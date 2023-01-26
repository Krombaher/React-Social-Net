import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../../redux/UsersReducer";

import React from "react";
import {Users} from "./Users";
import CircularIndeterminate from "../../Progress/CircularIndeterminate";
import {getUsers} from "../../../Api/Api";

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

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, any> {
    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUser(data.items)
            this.props.setTotalUsersCountAC(data.totalCount)
        })
    }

    onPageChanged = (pagesCount: number) => {
        this.props.setCurrentPage(pagesCount);
        this.props.setIsFetching(true)
        getUsers(pagesCount, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUser(data.items)
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
                            {...this.props}
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
