import { ECategoriesActionTypes, ICategoriesState, TCategoriesAction } from "../../types/categories"

const initialState: ICategoriesState = {
    categories: [],
    loading: false,
    error: null
}

export const categoriesReducer = (state = initialState, action: TCategoriesAction): ICategoriesState => {
    switch (action.type) {
        case (ECategoriesActionTypes.FETCH_CATEGORIES):
            return { ...state, loading: true, error: null, categories: [] }
        case (ECategoriesActionTypes.FETCH_CATEGORIES_SUCCESS):
            return { ...state, loading: false, categories: action.payload, error: null }
        case (ECategoriesActionTypes.FETCH_CATEGORIES_ERROR):
            return { ...state, loading: false, error: action.payload, categories: [] }
        default:
            return state
    }
}