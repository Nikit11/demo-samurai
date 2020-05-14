import { usersApi } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'users/TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';
let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, 'id', {followed: true})
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        }
        default:
            return state;
    }

}
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (count) => ({ type: TOTAL_USERS_COUNT, count })
export const acceptFollow = (userId) => ({ type: FOLLOW, userId })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
export const acceptUnFollow = (userId) =>
    ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        let data = await usersApi.getUsers(currentPage, pageSize)
    
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async(dispatch,id,apiMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true, id));
        let response = await apiMethod(id)
            if (response.data.resultCode == 0) {
                dispatch(actionCreator(id));
            }
            dispatch(toggleFollowingProgress(false, id));
}

export const follow = (id) => {
    return async (dispatch) => {
        let apiMethod = usersApi.follow.bind(usersApi);
        let actionCreator = acceptFollow;
        followUnfollowFlow(dispatch,id,apiMethod,actionCreator);
    }
}
export const unfollow = (id) => {
    return async (dispatch) => {
        let apiMethod = usersApi.unfollow.bind(usersApi);
        let actionCreator = acceptUnFollow;
        followUnfollowFlow(dispatch,id,apiMethod,actionCreator);
    }
}
export default userReducer;