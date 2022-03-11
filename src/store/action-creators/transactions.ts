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
            dispatch({ type: ETransactionsActionTypes.FETCH_TRANSACTIONS_ERROR, payload: 'Error while fetching transactions' })
        }
    }
}
