import axios from "axios"
import { Dispatch } from "redux"
import { EUserActionTypes, TUserAction } from "../../types/user"

export const authUser = (url: string, dataToSend: {}) => {
    return async (dispatch: Dispatch<TUserAction>) => {
        try {
            dispatch({ type: EUserActionTypes.FETCH_AUTH })
            const res = await axios.post(url, dataToSend)
            const { user: { name, email }, token } = res.data

            
            const userInfo = { name, email }
            localStorage.setItem('financeAppUserInfo', JSON.stringify(userInfo))
            
            localStorage.setItem('financeAppToken', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            dispatch({ type: EUserActionTypes.FETCH_AUTH_SUCCESS, payload: { name, email } })
        } catch (error) {
            dispatch({ type: EUserActionTypes.FETCH_AUTH_ERROR, payload: 'Error while fetching auth' })
            
            return error   
        }
    }
}

export const logoutUser = (): TUserAction => {
    return { type: EUserActionTypes.LOGOUT_USER }
}