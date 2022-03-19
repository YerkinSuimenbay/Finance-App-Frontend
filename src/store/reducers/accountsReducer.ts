import { EAccountsActionTypes, IAccountsState, TAccountsAction } from "../../types/accounts"

const initialState: IAccountsState = {
    data: {
        accounts: [],
        total: 0,
    },
    loading: false,
    error: null
}

export const accountsReducer = (state = initialState, action: TAccountsAction): IAccountsState => {
    switch (action.type) {
        case (EAccountsActionTypes.FETCH_ACCOUNTS):
            return { ...state, loading: true, error: null, data: { accounts: [], total: 0 } }
        case (EAccountsActionTypes.FETCH_ACCOUNTS_SUCCESS):
            return { ...state, loading: false, data: { accounts: action.payload.accounts, total: action.payload.total }, error: null }
        case (EAccountsActionTypes.FETCH_ACCOUNTS_ERROR):
            return { ...state, loading: false, error: action.payload, data: { accounts: [], total: 0 } }
        default:
            return state
    }
}