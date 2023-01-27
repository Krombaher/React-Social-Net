import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "bb94a001-6da7-411d-8beb-2baad26397a6"
    }
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const getProfileUser = (userId:string) => {
    return  instance.get(`profile/` + userId)
        .then(response => response.data)
}

export const postFollowUser = (id:string) => {
    return  instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const deleteFollowUser = (id:string) => {
    return  instance.delete(`follow/${id}`)
        .then(response => response.data)
}

export const getAuthAPI = () => {
    return instance.get(`auth/me`)
        .then(response => response.data)
}

