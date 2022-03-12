import { ECurrency } from "./account";

export enum ETransactionType {
    INCOME = 'income',
    EXPENSE = 'expense',
}
export interface ITransaction {
    _id: string,
    type: ETransactionType,
    amount: number,
    account: string,
    currency: ECurrency,
    color: string,
    comment: string,
    category: string,
    // createdBy: string,
    createdAt: string,
    updatedAt: string, 
    icon: string
}
export interface ITransactionNew extends Omit<ITransaction, '_id'>  {
    _id: ''
}

export interface ITransactionState {
    transaction: ITransaction,
    loading: boolean,
    error: null | string,
}

export interface ITransactionEdit {
    key: string,
    value: string | number | boolean
}



export enum ETransactionActionTypes {
    FETCH_TRANSACTION = 'FETCH_TRANSACTION',
    FETCH_TRANSACTION_SUCCESS = 'FETCH_TRANSACTION_SUCCESS',
    FETCH_TRANSACTION_ERROR = 'FETCH_TRANSACTION_ERROR',

    EDIT_TRANSACTION = 'EDIT_TRANSACTION',
    
    CREATE_TRANSACTION = 'CREATE_TRANSACTION',
    DELETE_TRANSACTION = 'DELETE_TRANSACTION'
}

interface IFetchTransactionAction {
    type: ETransactionActionTypes.FETCH_TRANSACTION,
}
interface IFetchTransactionActionSuccess {
    type: ETransactionActionTypes.FETCH_TRANSACTION_SUCCESS,
    payload: ITransaction
}
interface IFetchTransactionActionError {
    type: ETransactionActionTypes.FETCH_TRANSACTION_ERROR,
    payload: string
}

interface IEditTransaction {
    type: ETransactionActionTypes.EDIT_TRANSACTION,
    payload: ITransactionEdit
}

interface ICreateTransactionAction {
    type: ETransactionActionTypes.CREATE_TRANSACTION,
    payload: ITransactionNew
}


interface IDeleteTransaction {
    type: ETransactionActionTypes.DELETE_TRANSACTION,
    payload: string  // id
}

export type TTransactionAction = 
    IFetchTransactionAction | IFetchTransactionActionSuccess | IFetchTransactionActionError 
    | IEditTransaction 
    | ICreateTransactionAction 
    | IDeleteTransaction