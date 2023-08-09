import authApi from "@/api/authApi";
import { logout } from "./mutations";

export const createUser=async({commit}, user)=>{
    const { name, email, password}= user

    try {
        const {data} = await authApi.post(':signUp', {email, password, returnSecureToken: true})
        const {idToken, refreshToken} = data

        await authApi.post(':update', {displayName: name, idToken, refreshToken})

        delete user.password
        commit('loginUser', {user, idToken, refreshToken})

        return {ok: true}
    } catch (error) {
        console.log(error.response);
        return {ok: false, message: error.response.data.error.message}
    }
}

export const signInUser = async({commit}, user)=>{
    const {email, password}= user

    try {
        const {data} = await authApi.post(':signInWithPassword', {email, password, returnSecureToken: true})
        const {idToken, refreshToken} = data

        commit('loginUser', {user, idToken, refreshToken})
        console.log('Logra terminar hasta este punto');

        return {ok: true}
    } catch (error) {
        console.log(error.response);
        return {ok: false, message: error.response.data.error.message}
    }
}

export const checkAuth = async({commit})=>{
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('idToken')

    if (!idToken) {
        commit('logout')
        return {ok: false, message: 'No hay token en la petición'}
    }

    try {
        const {data} = await authApi.post(':lookup', {idToken})
        const {displayName, email} = data.users[0]

        const user={
            name: displayName,
            email
        }

        commit('loginUser', {user, idToken, refreshToken})
        return {ok: true}
    } catch (error) {
        commit('logout')
        return {ok: false, message: error.response.data.error.message}
    }
}