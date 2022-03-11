import axios from "axios"
import { Dispatch } from "redux"
import { ECategoriesActionTypes, TCategoriesAction } from "../../types/categories"

export const fetchCategories = (url: string) => {
    return async (dispatch: Dispatch<TCategoriesAction>) => {
        try {
            dispatch({ type: ECategoriesActionTypes.FETCH_CATEGORIES })
            const res = await axios.get(url)
            const { categories } = res.data
            
            dispatch({ type: ECategoriesActionTypes.FETCH_CATEGORIES_SUCCESS, payload: categories })

            return categories
        } catch (error) {
            dispatch({ type: ECategoriesActionTypes.FETCH_CATEGORIES_ERROR, payload: 'Error while fetching categories' })
        }
    }
}
