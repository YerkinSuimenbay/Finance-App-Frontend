import axios from "axios"
import { Dispatch } from "redux"
import { EAccountsActionTypes, TAccountsAction } from "../../types/accounts"

export const fetchAccounts = (url: string) => {
    return async (dispatch: Dispatch<TAccountsAction>) => {
        try {
            dispatch({ type: EAccountsActionTypes.FETCH_ACCOUNTS })
            const res = await axios.get(url)
            const { accounts, total } = res.data
            
            dispatch({ 
                type: EAccountsActionTypes.FETCH_ACCOUNTS_SUCCESS, 
                payload: {
                    accounts, 
                    total, 
                } 
            })

            return accounts
        } catch (error) {
            let errorMessage = 'Error while fetching accounts'
            console.log(error);
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data);
                errorMessage += '. ' + error.response?.data.msg
            } else if (error instanceof Error) {
                errorMessage += error.message
            }
            
            dispatch({ type: EAccountsActionTypes.FETCH_ACCOUNTS_ERROR, payload: errorMessage })
        }
    }
}
