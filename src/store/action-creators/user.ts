import axios from "axios"
import { Dispatch } from "redux"
import { EUserActionTypes, TUserAction } from "../../types/user"

export const authUser = (url: string, dataToSend: {}) => {
    return async (dispatch: Dispatch<TUserAction>) => {
        try {
            dispatch({ type: EUserActionTypes.FETCH_AUTH })
            const res = await axios.post(url, dataToSend)
            const { user: { name, email, settings }, token } = res.data
            
            const userInfo = { name, email, settings }
            localStorage.setItem('financeAppUserInfo', JSON.stringify(userInfo))
            
            localStorage.setItem('financeAppToken', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            dispatch({ type: EUserActionTypes.FETCH_AUTH_SUCCESS, payload: { name, email, settings } })
        } catch (error) {
            dispatch({ type: EUserActionTypes.FETCH_AUTH_ERROR, payload: 'Error while fetching auth' })
            
            return error   
        }
    }
}

export const updateUserSettings = (setting_name: string, setting_value: string | number) => {
    return async (dispatch: Dispatch<TUserAction>) => {
        try {
            dispatch({ type: EUserActionTypes.UPDATE_USER_SETTINGS })
           
            const res = await axios.patch('user/settings', { [setting_name]: setting_value })
            const { user: { name, email, settings } } = res.data
            
            dispatch({ type: EUserActionTypes.UPDATE_USER_SETTINGS_SUCCESS, payload: { setting_name, setting_value } })
            
            const userInfo = { name, email, settings }
            localStorage.setItem('financeAppUserInfo', JSON.stringify(userInfo))
        } catch (error) {
            dispatch({ type: EUserActionTypes.UPDATE_USER_SETTINGS_ERROR, payload: 'Error while fetching auth' })
            
            return error   
        }
    }
}

export const logoutUser = (): TUserAction => {
    return { type: EUserActionTypes.LOGOUT_USER }
}