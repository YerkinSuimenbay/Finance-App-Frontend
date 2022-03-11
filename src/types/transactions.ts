import { ITransaction } from "./transaction";



export interface ITransactionsState {
    transactions: ITransaction[],
    loading: boolean,
    error: null | string
}

export enum ETransactionsActionTypes {
    FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS',
    FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS',
    FETCH_TRANSACTIONS_ERROR = 'FETCH_TRANSACTIONS_ERROR'
}

interface IFetchTransactionsAction {
    type: ETransactionsActionTypes.FETCH_TRANSACTIONS
}

interface IFetchTransactionsActionSuccess {
    type: ETransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS,
    payload: ITransaction[]
}

interface IFetchTransactionsActionError {
    type: ETransactionsActionTypes.FETCH_TRANSACTIONS_ERROR,
    payload: string
}

export type TTransactionsAction = IFetchTransactionsAction | IFetchTransactionsActionSuccess | IFetchTransactionsActionError