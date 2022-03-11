import axios from "axios"
import { Dispatch } from "redux"
import { EAccountsActionTypes, TAccountsAction } from "../../types/accounts"

export const fetchAccounts = (url: string) => {
    return async (dispatch: Dispatch<TAccountsAction>) => {
        try {
            dispatch({ type: EAccountsActionTypes.FETCH_ACCOUNTS })
            const res = await axios.get(url)
            const { accounts } = res.data
            
            dispatch({ type: EAccountsActionTypes.FETCH_ACCOUNTS_SUCCESS, payload: accounts })

            return accounts
        } catch (error) {
            dispatch({ type: EAccountsActionTypes.FETCH_ACCOUNTS_ERROR, payload: 'Error while fetching accounts' })
        }
    }
}
