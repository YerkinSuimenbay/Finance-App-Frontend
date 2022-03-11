import { IAccount } from "./account";


export interface IAccountsState {
    accounts: IAccount[],
    loading: boolean,
    error: null | string
}

export enum EAccountsActionTypes {
    FETCH_ACCOUNTS = 'FETCH_ACCOUNTS',
    FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS',
    FETCH_ACCOUNTS_ERROR = 'FETCH_ACCOUNTS_ERROR'
}

interface IFetchAccountsAction {
    type: EAccountsActionTypes.FETCH_ACCOUNTS
}

interface IFetchAccountsActionSuccess {
    type: EAccountsActionTypes.FETCH_ACCOUNTS_SUCCESS,
    payload: IAccount[]
}

interface IFetchAccountsActionError {
    type: EAccountsActionTypes.FETCH_ACCOUNTS_ERROR,
    payload: string
}

export type TAccountsAction = IFetchAccountsAction | IFetchAccountsActionSuccess | IFetchAccountsActionError