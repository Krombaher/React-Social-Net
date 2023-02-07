import React from 'react'
import user from '../../../assets/Img/user-icon.png';
import s from './Users.module.scss'
import PaginationControlled from "../../Pagination/PaginationControlled";
import {UsersType} from "../../../redux/reducers/UsersReducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
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
    onPageChanged:(pagesCount: number) => void
}

export const Users = (props: UsersPropsType) => {

    const usersItem = props.users.map(el => {
        return (
            <div key={el.id} className={s.usersBlock}>
                <h3>{el.name}</h3>
                <NavLink to={'/profile/' + el.id}>
                    <img src={el.photos.small != null ? el.photos.small : user} alt={'img'}/>
                </NavLink>
                <span>Follow</span>
                {
                    el.followed
                        ?
                        <button disabled={props.followingInProgress.some(id => id === el.id)}
                                onClick={() => {props.unfollowTC(el.id)}}>unFollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === el.id)}
                                onClick={() => {props.followTC(el.id)}}>follow</button>
                }
            </div>
        )
    })

    return (
        <div>
            <h2 style={{margin: '10px'}}>Users</h2>
            <PaginationControlled
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            {usersItem}
        </div>
    )
}
