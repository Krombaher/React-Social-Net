import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";
import {
    followTC, getUsersTC,
    setCurrentPageAC, setFollowingProgressAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowTC,
    UsersType
} from "../../../redux/UsersReducer";
import React from "react";
import {Users} from "./Users";
import CircularIndeterminate from "../../Progress/CircularIndeterminate";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
export type UsersAPIComponentPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    setUsersAC: (users: UsersType[]) => void
    setTotalUsersCountAC: (totalUsersCount: number) => void
    setCurrentPageAC: (currentPage: number) => void
    setIsFetchingAC: (isFetching: boolean) => void
    setFollowingProgressAC: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userID: number) => void
    unfollowTC: (userID: number) => void
}

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, any> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pagesCount: number) => {
        this.props.getUsersTC(pagesCount, this.props.pageSize)
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
                            onPageChanged={this.onPageChanged}/>
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        setUsersAC,
        setTotalUsersCountAC,
        setCurrentPageAC,
        setIsFetchingAC,
        setFollowingProgressAC,
        getUsersTC,
        followTC,
        unfollowTC
    })
)(UsersAPIComponent)
