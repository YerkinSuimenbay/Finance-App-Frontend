import axios from "axios"
import { Dispatch } from "redux"
import { ETransactionsActionTypes, TTransactionsAction } from "../../types/transactions"

export const fetchTransactions = (url: string) => {
    return async (dispatch: Dispatch<TTransactionsAction>) => {
        try {
            dispatch({ type: ETransactionsActionTypes.FETCH_TRANSACTIONS })
            const res = await axios.get(url)
            const { transactions } = res.data
            
            dispatch({ type: ETransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS, payload: transactions })
        } catch (error) {
            let errorMessage = 'Error while fetching transactions'
            console.log(error);
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data);
                errorMessage += '. ' + error.response?.data.msg
            } else if (error instanceof Error) {
                errorMessage += error.message
            }
            
            dispatch({ type: ETransactionsActionTypes.FETCH_TRANSACTIONS_ERROR, payload: errorMessage })
        }
    }
}

export const cleanUpTransactions = ():TTransactionsAction => {
    return { type: ETransactionsActionTypes.CLEAN_UP_TRANSACTIONS }
}
