import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getCatalog() {
        return instance.get('users')
            .then(response => response.data)
    }
}