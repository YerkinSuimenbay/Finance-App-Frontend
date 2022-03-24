import { ETransactionsActionTypes, ITransactionsState, TTransactionsAction } from "../../types/transactions"

const initialState: ITransactionsState = {
    transactions: [],
    loading: false,
    error: null
}

export const transactionsReducer = (state = initialState, action: TTransactionsAction): ITransactionsState => {
    switch (action.type) {
        case (ETransactionsActionTypes.FETCH_TRANSACTIONS):
            return { ...state, loading: true, error: null }
        case (ETransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS):
            return { ...state, loading: false, transactions: action.payload }
        case (ETransactionsActionTypes.FETCH_TRANSACTIONS_ERROR):
            return { ...state, loading: false, error: action.payload }
        case (ETransactionsActionTypes.CLEAN_UP_TRANSACTIONS):
            return { ...state, loading: true, error: null, transactions: [] }
        default:
            return state
    }
}