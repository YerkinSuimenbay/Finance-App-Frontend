import axios from "axios"
import { Dispatch } from "redux"
import { EUsersActionTypes, TUsersAction } from "../../types/users"


export const fetchUsers = (url: string) => {
    return async (dispatch: Dispatch<TUsersAction>) => {
        try {
            dispatch({ type: EUsersActionTypes.FETCH_USERS })
            const res = await axios.get(url)
            dispatch({ type: EUsersActionTypes.FETCH_USERS_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: EUsersActionTypes.FETCH_USERS_ERROR, payload: 'Error while fetching users' })
        }
    }
}