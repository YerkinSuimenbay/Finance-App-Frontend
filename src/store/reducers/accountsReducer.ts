import { EAccountsActionTypes, IAccountsState, TAccountsAction } from "../../types/accounts"

const initialState: IAccountsState = {
    accounts: [],
    loading: false,
    error: null
}

export const accountsReducer = (state = initialState, action: TAccountsAction): IAccountsState => {
    switch (action.type) {
        case (EAccountsActionTypes.FETCH_ACCOUNTS):
            return { ...state, loading: true, error: null, accounts: [] }
        case (EAccountsActionTypes.FETCH_ACCOUNTS_SUCCESS):
            return { ...state, loading: false, accounts: action.payload, error: null }
        case (EAccountsActionTypes.FETCH_ACCOUNTS_ERROR):
            return { ...state, loading: false, error: action.payload, accounts: [] }
        default:
            return state
    }
}