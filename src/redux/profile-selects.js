import { createSelector } from "reselect"

let getProfileSelector = (state) => {
    return state.profilePage.profile
}
export let getProfile = createSelector(getProfileSelector,(profile) => {
    return profile;
});
export let getProfileStatus = (state) => {
    return state.profilePage.status
}
export let getAuthorizedUserId = (state) => {
    return state.auth.id
}
export let getIsAuth = (state) => {
    return state.auth.isAuth
}