
export enum ECurrency {
    KZT = 'KZT',
    RUB = 'RUB',
    USD = 'USD',
}
export interface IAccount {
    _id: string,
    totalCash: number,
    name: string,
    color: string,
    currency: ECurrency,
}
export interface IAccountNew extends Omit<IAccount, '_id'>  {
    _id: ''
}

export interface IAccountState {
    account: IAccount,
    loading: boolean,
    error: null | string,
}

export interface IAccountEdit {
    key: string,
    value: string | number | boolean
}



export enum EAccountActionTypes {
    FETCH_ACCOUNT = 'FETCH_ACCOUNT',
    FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS',
    FETCH_ACCOUNT_ERROR = 'FETCH_ACCOUNT_ERROR',

    EDIT_ACCOUNT = 'EDIT_ACCOUNT',
    
    CREATE_ACCOUNT = 'CREATE_ACCOUNT',
    DELETE_ACCOUNT = 'DELETE_ACCOUNT'
}

interface IFetchAccountAction {
    type: EAccountActionTypes.FETCH_ACCOUNT,
}
interface IFetchAccountActionSuccess {
    type: EAccountActionTypes.FETCH_ACCOUNT_SUCCESS,
    payload: IAccount
}
interface IFetchAccountActionError {
    type: EAccountActionTypes.FETCH_ACCOUNT_ERROR,
    payload: string
}

interface IEditAccount {
    type: EAccountActionTypes.EDIT_ACCOUNT,
    payload: IAccountEdit
}

interface ICreateAccountAction {
    type: EAccountActionTypes.CREATE_ACCOUNT,
    payload: IAccountNew
}


interface IDeleteAccount {
    type: EAccountActionTypes.DELETE_ACCOUNT,
    payload: string  // id
}

export type TAccountAction = 
    IFetchAccountAction | IFetchAccountActionSuccess | IFetchAccountActionError 
    | IEditAccount 
    | ICreateAccountAction 
    | IDeleteAccount