import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS } from "../constants/actionsTypes";


const initialState = {
    loading: false
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_REGISTER:
        case USER_LOGIN:
            return { ...state, loading: true }

        case USER_REGISTER_SUCCESS:
            return { ...state, loading: false, msg: payload }

        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, token: payload.token, user: payload.user, isAuth: true }

        case USER_REGISTER_FAILED:
        case USER_LOGIN_FAILED:
            return { ...state, loading: false, error: payload }




        default:
            return state;
    }
}

export default userReducer