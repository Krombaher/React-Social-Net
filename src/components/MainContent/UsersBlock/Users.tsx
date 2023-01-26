import React from 'react'
import user from '../../../assets/Img/user-icon.png';
import s from './Users.module.scss'
import PaginationControlled from "../../Pagination/PaginationControlled";
import {UsersType} from "../../../redux/UsersReducer";
import {NavLink} from "react-router-dom";
import {deleteFollowUser, postFollowUser} from "../../../Api/Api";

export type UsersPropsType = {
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
    onPageChanged: (pagesCount: number) => void

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
                        <button onClick={() => {
                            deleteFollowUser(el.id)
                                .then(data => {
                                    if(data.resultCode === 0) {
                                        props.removeFollowUser(el.id)
                                    }
                                })
                        }}>unFollow</button>
                        :
                        <button onClick={() => {
                            postFollowUser(el.id)
                                .then(data => {
                                    if(data.resultCode === 0) {
                                        props.addFollowUser(el.id)
                                    }
                                })
                        }}>follow</button>
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
