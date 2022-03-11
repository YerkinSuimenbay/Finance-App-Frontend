import axios from "axios"
import { Dispatch } from "redux"
import { ECategoryActionTypes, ECategoryType, ICategoryEdit, TCategoryAction } from "../../types/category"

export const fetchCategory = (url: string) => {
    return async (dispatch: Dispatch<TCategoryAction>) => {
        try {
            dispatch({ type: ECategoryActionTypes.FETCH_CATEGORY })
            const res = await axios.get(url)
            const { category } = res.data
            dispatch({ type: ECategoryActionTypes.FETCH_CATEGORY_SUCCESS, payload: category })
            return category
        } catch (error) {
            dispatch({ type: ECategoryActionTypes.FETCH_CATEGORY_ERROR, payload: 'Error while fetching category' })
        }
    }
}

export const editCategory = (payload: ICategoryEdit): TCategoryAction => {
    return { type: ECategoryActionTypes.EDIT_CATEGORY, payload }
}
export const createCategory = (): TCategoryAction => {
    return { type: ECategoryActionTypes.CREATE_CATEGORY, payload: {
        _id: '',
        type: ECategoryType.EXPENSE,
        name: '',
        color: '#ffffff',
    } }
}