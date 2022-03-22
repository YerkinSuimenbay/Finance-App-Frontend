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
            let errorMessage = 'Error while fetching categories'
            console.log(error);
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data);
                errorMessage += '. ' + error.response?.data.msg
            } else if (error instanceof Error) {
                errorMessage += error.message
            }

            dispatch({ type: ECategoriesActionTypes.FETCH_CATEGORIES_ERROR, payload: errorMessage })
        }
    }
}

export const cleanUpCategories = ():TCategoriesAction => {
    return { type: ECategoriesActionTypes.CLEAN_UP_CATEGORIES }
}
