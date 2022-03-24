import { ITransaction } from "./transaction";



export interface ITransactionsState {
    transactions: ITransaction[],
    loading: boolean,
    error: null | string
}

export enum ETransactionsActionTypes {
    FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS',
    FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS',
    FETCH_TRANSACTIONS_ERROR = 'FETCH_TRANSACTIONS_ERROR',
    CLEAN_UP_TRANSACTIONS = 'CLEAN_UP_TRANSACTIONS',
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

interface ICleanUpTransactionsAction {
    type: ETransactionsActionTypes.CLEAN_UP_TRANSACTIONS
}

export type TTransactionsAction = IFetchTransactionsAction | IFetchTransactionsActionSuccess | IFetchTransactionsActionError | ICleanUpTransactionsAction