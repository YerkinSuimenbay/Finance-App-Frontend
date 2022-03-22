import axios from "axios"
import { Dispatch } from "redux"
import { ECurrency } from "../../types/account"
import { ETransactionActionTypes, ETransactionType, ITransactionEdit, TTransactionAction } from "../../types/transaction"

export const fetchTransaction = (url: string) => {
    return async (dispatch: Dispatch<TTransactionAction>) => {
        try {
            dispatch({ type: ETransactionActionTypes.FETCH_TRANSACTION })
            const res = await axios.get(url)
            const { transaction } = res.data
            dispatch({ type: ETransactionActionTypes.FETCH_TRANSACTION_SUCCESS, payload: transaction })
            return transaction
        } catch (error) {
            dispatch({ type: ETransactionActionTypes.FETCH_TRANSACTION_ERROR, payload: 'Error while fetching transaction' })
        }
    }
}

export const editTransaction = (payload: ITransactionEdit): TTransactionAction => {
    return { type: ETransactionActionTypes.EDIT_TRANSACTION, payload }
}
export const createTransaction = (default_account: string): TTransactionAction => {
    return { type: ETransactionActionTypes.CREATE_TRANSACTION, payload: {
        _id: '',
        type: '',
        amount: 0,
        account: default_account,
        currency: '' as ECurrency,
        color: '#ffffff',
        comment: '',
        category: '',
        // createdBy: string,
        createdAt: new Date().toISOString().split('T')[0],
        // updatedAt: new Date().toISOString().split('T')[0],
        icon: '',
        percentage: 0
    } }
}