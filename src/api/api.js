import Axios from "axios"

let instance = Axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "2b27c512-f2ed-4cac-9606-f6f01c831fec"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

})
export const usersApi = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    }
}
export const authApi = {
    authMe() {
       return  instance.get(`auth/me`);
    },
    login(email,password,rememberMe=false) {
        return instance.post(`auth/login`,{
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    },
    logout() {
        return instance.delete(`auth/login`);
    }
} 
export const profileApi = {
    getProfile(id) {
        return instance.get(`profile/${id}`);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status: status});
    }
}
