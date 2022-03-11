import axios from "axios"
import { EUserActionTypes, IUserState, TUserAction } from "../../types/user"

const token = localStorage.getItem("financeAppToken")

const initialState: IUserState = {
    name: '',
    email: '',
    loading: false,
    error: null,
    loggedIn: !!token,
}

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const authReducer = (state = initialState, action: TUserAction): IUserState => {
    switch (action.type) {
        case (EUserActionTypes.FETCH_AUTH):
            return { loading: true, error: null, name: '', email: '', loggedIn: false }
        case (EUserActionTypes.FETCH_AUTH_SUCCESS):
            return { loading: false, error: null, name: action.payload.name, email: action.payload.email, loggedIn: true }
        case (EUserActionTypes.FETCH_AUTH_ERROR):
            return { loading: false, error: action.payload, name: '', email: '', loggedIn: false }
        case (EUserActionTypes.LOGOUT_USER):
            return { loading: false, error: null, name: '', email: '', loggedIn: false }
        default:
            return state
    }
}
