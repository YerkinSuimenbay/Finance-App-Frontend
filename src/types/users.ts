export interface IUsersState {
    users: any[],
    loading: boolean,
    error: null | string,
}

export enum EUsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchUsersAction {
    type: EUsersActionTypes.FETCH_USERS
}
interface IFetchUsersActionSuccess {
    type: EUsersActionTypes.FETCH_USERS_SUCCESS,
    payload: any[] 
}
interface IFetchUsersActionError {
    type: EUsersActionTypes.FETCH_USERS_ERROR,
    payload: string 
}

export type TUsersAction = IFetchUsersAction | IFetchUsersActionSuccess | IFetchUsersActionError