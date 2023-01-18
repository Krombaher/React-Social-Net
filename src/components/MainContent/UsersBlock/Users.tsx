import React from 'react'
import {UsersType} from "../../../redux/UsersReducer";
import user from '../../../assets/Img/user-icon.png';
import s from './Users.module.scss'
import axios from "axios";
import PaginationControlled from "../../Pagination/PaginationControlled";

export type UsersPropsType = {
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

export class Users extends React.Component<UsersPropsType, any> {
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

    // constructor(props:UsersPropsType) {
    //     super(props);
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             this.props.setUser(response.data.items)
    //         })
    // }
    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             this.props.setUser(response.data.items)
    //         })
    //     }
    // }

    render() {

        const usersItem = this.props.users.map(el => {
            return (
                <div key={el.id} className={s.usersBlock}>
                    <h3>{el.name}</h3>
                    <img src={ el.photos.small != null ? el.photos.small : user} alt={'img'}/>
                    <span>Follow</span>
                    {
                        el.followed ? <button onClick={() => this.props.removeFollowUser(el.id)}>unFollow</button>
                            : <button onClick={() => this.props.addFollowUser(el.id)}>follow</button>
                    }
                </div>
            )
        })

        console.log(this.props.users)

        return (
            <div>
                <h2 style={{margin: '10px'}}>Users</h2>
                <PaginationControlled
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                />
                {usersItem}
            </div>
        )
    }


}

// export const Users = (props:UsersPropsType) => {
//
//     if (props.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUser(response.data.items)
//         })
//     }
//
//     // useEffect(() => {
//     //     usersAPI.getCatalog().then(response => {
//     //         props.setUser(response.data.items)
//     //     })
//     // },[props.users])
//     //
//     // console.log(props.users)
//
//     const usersItem = props.users.map(el => {
//         return (
//             <div key={el.id} className={s.usersBlock}>
//                 <h3>{el.name}</h3>
//                 <img src={user} alt={'img'}/>
//                 <span>Follow</span>
//                 {
//                     el.followed ? <button onClick={() => props.removeFollowUser(el.id)}>unFollow</button>
//                         : <button onClick={() => props.addFollowUser(el.id)}>follow</button>
//                 }
//             </div>
//         )
//     })
//
//     return (
//         <div>
//             <h2>Users</h2>
//             {usersItem}
//         </div>
//     )
// }
