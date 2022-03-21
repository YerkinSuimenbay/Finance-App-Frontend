export interface IUserState {
    name: string,
    email: string,
    loading: boolean,
    error: null | string,
    loggedIn: boolean,
    settings: {
        app_language: string,
        default_account: string,
        default_period: string,
    }
}

export enum EUserActionTypes {
    FETCH_AUTH = 'FETCH_AUTH',
    FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
    FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR',
    LOGOUT_USER = 'LOGOUT_USER',
    UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS',
    UPDATE_USER_SETTINGS_SUCCESS = 'UPDATE_USER_SETTINGS_SUCCESS',
    UPDATE_USER_SETTINGS_ERROR = 'UPDATE_USER_SETTINGS_ERROR'
}

interface IFetchUserAction {
    type: EUserActionTypes.FETCH_AUTH
}

interface IFetchUserActionSuccess {
    type: EUserActionTypes.FETCH_AUTH_SUCCESS,
    payload: {
        name: string,
        email: string,
        settings: {
            app_language: string,
            default_account: string,
            default_period: string,
        }
    },
}

interface IFetchUserActionError {
    type: EUserActionTypes.FETCH_AUTH_ERROR,
    payload: string
}

interface ILogoutUserAction {
    type: EUserActionTypes.LOGOUT_USER,
}

interface IUpdateUserSettingsAction {
    type: EUserActionTypes.UPDATE_USER_SETTINGS
}
interface IUpdateUserSettingsActionSuccess {
    type: EUserActionTypes.UPDATE_USER_SETTINGS_SUCCESS,
    payload: {
        setting_name: string,
        setting_value: string | number
    }
}
interface IUpdateUserSettingsActionError {
    type: EUserActionTypes.UPDATE_USER_SETTINGS_ERROR,
    payload: string
}



export type TUserAction = 
    IFetchUserAction | IFetchUserActionSuccess | IFetchUserActionError 
    | ILogoutUserAction 
    | IUpdateUserSettingsAction | IUpdateUserSettingsActionSuccess | IUpdateUserSettingsActionError


