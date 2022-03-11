export interface IUserState {
    name: string,
    email: string,
    loading: boolean,
    error: null | string,
    loggedIn: boolean,
}

export enum EUserActionTypes {
    FETCH_AUTH = 'FETCH_AUTH',
    FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
    FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR',
    LOGOUT_USER = 'LOGOUT_USER',
}

interface IFetchUserAction {
    type: EUserActionTypes.FETCH_AUTH
}

interface IFetchUserActionSuccess {
    type: EUserActionTypes.FETCH_AUTH_SUCCESS,
    payload: {
        name: string,
        email: string,
    },
}

interface IFetchUserActionError {
    type: EUserActionTypes.FETCH_AUTH_ERROR,
    payload: string
}

interface ILogoutUserAction {
    type: EUserActionTypes.LOGOUT_USER,
}

export type TUserAction = IFetchUserAction | IFetchUserActionSuccess | IFetchUserActionError | ILogoutUserAction


