import axios from "axios"
import { EUserActionTypes, IUserState, TUserAction } from "../../types/user"
import { getUserInfo } from "../../utils/js/getUserInfo"

const token = localStorage.getItem("financeAppToken")

// let name = ''
// let email = ''
const { name, email, settings } = getUserInfo()
const initialState: IUserState = {
    name,
    email,
    loading: false,
    error: null,
    loggedIn: !!token,
    settings
}

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const authReducer = (state = initialState, action: TUserAction): IUserState => {
    switch (action.type) {
        case (EUserActionTypes.FETCH_AUTH):
            return { loading: true, error: null, name: '', email: '', loggedIn: false, settings: {
                app_language: '',
                default_account: '',
                default_period: '',
            } }
        case (EUserActionTypes.FETCH_AUTH_SUCCESS):
            return { loading: false, error: null, name: action.payload.name, email: action.payload.email, loggedIn: true, settings: action.payload.settings }
        case (EUserActionTypes.FETCH_AUTH_ERROR):
            return { loading: false, error: action.payload, name: '', email: '', loggedIn: false, settings: {
                app_language: '',
                default_account: '',
                default_period: '',
            } }
        case (EUserActionTypes.LOGOUT_USER):
            return { loading: false, error: null, name: '', email: '', loggedIn: false, settings: {
                app_language: '',
                default_account: '',
                default_period: '',
            } }
        // SETTINGS
        case (EUserActionTypes.UPDATE_USER_SETTINGS):
            return { ...state, loading: true, error: null, }
        case (EUserActionTypes.UPDATE_USER_SETTINGS_SUCCESS):
            console.log('hereeeeee', { [action.payload.setting_name]: action.payload.setting_value });
            
            return { ...state, loading: false, settings: { ...state.settings, [action.payload.setting_name]: action.payload.setting_value } }
        case (EUserActionTypes.UPDATE_USER_SETTINGS_ERROR):
            return { ...state, loading: false, error: action.payload }
        
        default:
            return state
    }
}

// export const userSettingsReducer = (state = initialState, action: TUserAction): IUserState => {
//     switch (action.type) {
//         case (EUserActionTypes.UPDATE_USER_SETTINGS):
//             return { ...state, loading: true, error: null, }
//         case (EUserActionTypes.UPDATE_USER_SETTINGS_SUCCESS):
//             console.log('hereeeeee', { [action.payload.setting_name]: action.payload.setting_value });
            
//             return { ...state, loading: false, settings: { ...state.settings, [action.payload.setting_name]: action.payload.setting_value } }
//         case (EUserActionTypes.UPDATE_USER_SETTINGS_ERROR):
//             return { ...state, loading: false, error: action.payload }
//         default:
//             return state
//     }
// }
