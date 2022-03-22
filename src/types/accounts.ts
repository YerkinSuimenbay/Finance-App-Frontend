import { IAccount } from "./account";

export interface IAccountsResponseData {
    accounts: IAccount[],
    total: number
}

export interface IAccountsState {
    data: IAccountsResponseData,
    loading: boolean,
    error: null | string,
}

export enum EAccountsActionTypes {
    FETCH_ACCOUNTS = 'FETCH_ACCOUNTS',
    FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS',
    FETCH_ACCOUNTS_ERROR = 'FETCH_ACCOUNTS_ERROR',
    CLEAN_UP_ACCOUNTS = 'CLEAN_UP_ACCOUNTS'
}

interface IFetchAccountsAction {
    type: EAccountsActionTypes.FETCH_ACCOUNTS
}

interface IFetchAccountsActionSuccess {
    type: EAccountsActionTypes.FETCH_ACCOUNTS_SUCCESS,
    payload: IAccountsResponseData,
}

interface IFetchAccountsActionError {
    type: EAccountsActionTypes.FETCH_ACCOUNTS_ERROR,
    payload: string
}

interface ICleanUpAccountsAction {
    type: EAccountsActionTypes.CLEAN_UP_ACCOUNTS
}


export type TAccountsAction = IFetchAccountsAction | IFetchAccountsActionSuccess | IFetchAccountsActionError | ICleanUpAccountsAction