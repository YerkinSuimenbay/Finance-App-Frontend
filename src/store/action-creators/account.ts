import axios from "axios"
import { Dispatch } from "redux"
import { EAccountActionTypes, ECurrency, IAccountEdit, TAccountAction } from "../../types/account"

export const fetchAccount = (url: string) => {
    return async (dispatch: Dispatch<TAccountAction>) => {
        try {
            dispatch({ type: EAccountActionTypes.FETCH_ACCOUNT })
            const res = await axios.get(url)
            const { account } = res.data
            dispatch({ type: EAccountActionTypes.FETCH_ACCOUNT_SUCCESS, payload: account })
            return account
        } catch (error) {
            dispatch({ type: EAccountActionTypes.FETCH_ACCOUNT_ERROR, payload: 'Error while fetching account' })
        }
    }
}

export const editAccount = (payload: IAccountEdit): TAccountAction => {
    return { type: EAccountActionTypes.EDIT_ACCOUNT, payload }
}
export const createAccount = (): TAccountAction => {
    return { type: EAccountActionTypes.CREATE_ACCOUNT, payload: {
        _id: '',
        totalCash: 0,
        name: '',
        color: '#ffffff',
        currency: ECurrency.KZT,
    } }
}
