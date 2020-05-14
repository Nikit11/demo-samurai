import { authApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {

                ...state,
                ...action.data

            }
        }

        default:
            return state;
    }

}
export const setUserAuthDataAC = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });
export const authMeTC = () => {
    return async (dispatch) => {
        let response = await authApi.authMe()
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setUserAuthDataAC(id, login, email, true));
        }
    }
}
export const login = (email, password, rememberMe) => {

    return async (dispatch) => {

        let response = await authApi.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(authMeTC());
        } else {
            let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {
                _error: messages
            }));
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        let response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthDataAC(null, null, null, false));
        }
    }
}

export default authReducer;