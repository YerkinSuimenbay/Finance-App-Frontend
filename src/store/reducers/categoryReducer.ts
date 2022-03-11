import { ECategoryActionTypes, ECategoryType, ICategoryState, TCategoryAction } from "../../types/category";

const initialState: ICategoryState = {
    category: {
        _id: '',
        type: ECategoryType.EXPENSE,
        name: '',
        color: '',
    },
    loading: false,
    error: null
}

export const categoryReducer = (state = initialState, action: TCategoryAction): ICategoryState => {
    switch (action.type) {
        case (ECategoryActionTypes.FETCH_CATEGORY):
            return { ...state, loading: true }
        case (ECategoryActionTypes.FETCH_CATEGORY_SUCCESS):
            return { ...state, loading: false, category: action.payload }
        case (ECategoryActionTypes.FETCH_CATEGORY_ERROR):
            return { ...state, loading: false, error: action.payload }

        case (ECategoryActionTypes.EDIT_CATEGORY):
            return { ...state, category: { ...state.category, [action.payload.key]: action.payload.value } }
        
        case (ECategoryActionTypes.CREATE_CATEGORY):
            return { ...state, category: action.payload}
        default:
            return state
    }
}