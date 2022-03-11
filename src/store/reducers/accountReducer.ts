import { EAccountActionTypes, ECurrency, IAccountState, TAccountAction } from "../../types/account";

const initialState: IAccountState = {
    account: {
        _id: '',
        totalCash: 0,
        name: '',
        color: '',
        currency: ECurrency.KZT,
    },
    loading: false,
    error: null
}

export const accountReducer = (state = initialState, action: TAccountAction): IAccountState => {
    switch (action.type) {
        case (EAccountActionTypes.FETCH_ACCOUNT):
            return { ...state, loading: true }
        case (EAccountActionTypes.FETCH_ACCOUNT_SUCCESS):
            return { ...state, loading: false, account: action.payload }
        case (EAccountActionTypes.FETCH_ACCOUNT_ERROR):
            return { ...state, loading: false, error: action.payload }

        case (EAccountActionTypes.EDIT_ACCOUNT):
            return { ...state, account: { ...state.account, [action.payload.key]: action.payload.value } }
        
        case (EAccountActionTypes.CREATE_ACCOUNT):
            return { ...state, account: action.payload}
        default:
            return state
    }
}