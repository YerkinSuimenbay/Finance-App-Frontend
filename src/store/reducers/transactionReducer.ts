import { ECurrency } from "../../types/account";
import { ETransactionActionTypes, ETransactionType, ITransactionState, TTransactionAction } from "../../types/transaction";

const initialState: ITransactionState = {
    transaction: {
        _id: '',
        type: ETransactionType.EXPENSE,
        amount: 0,
        account: '',
        currency: ECurrency.KZT,
        color: '#ffffff',
        comment: '',
        category: '',
        // createdBy: string,
        createdAt: new Date().toISOString().split('T')[0],
        // updatedAt: new Date().toISOString().split('T')[0],
        icon: '',
        percentage: 0
    },
    loading: false,
    error: null
}

export const transactionReducer = (state = initialState, action: TTransactionAction): ITransactionState => {
    switch (action.type) {
        case (ETransactionActionTypes.FETCH_TRANSACTION):
            return { ...state, loading: true }
        case (ETransactionActionTypes.FETCH_TRANSACTION_SUCCESS):
            return { ...state, loading: false, transaction: action.payload }
        case (ETransactionActionTypes.FETCH_TRANSACTION_ERROR):
            return { ...state, loading: false, error: action.payload }

        case (ETransactionActionTypes.EDIT_TRANSACTION):
            return { ...state, transaction: { ...state.transaction, [action.payload.key]: action.payload.value } }
        
        case (ETransactionActionTypes.CREATE_TRANSACTION):
            return { ...state, transaction: action.payload}
        default:
            return state
    }
}