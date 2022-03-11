import { ICategory } from "./category";



export interface ICategoriesState {
    categories: ICategory[],
    loading: boolean,
    error: null | string
}

export enum ECategoriesActionTypes {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'
}

interface IFetchCategoriesAction {
    type: ECategoriesActionTypes.FETCH_CATEGORIES
}

interface IFetchCategoriesActionSuccess {
    type: ECategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: ICategory[]
}

interface IFetchCategoriesActionError {
    type: ECategoriesActionTypes.FETCH_CATEGORIES_ERROR,
    payload: string
}

export type TCategoriesAction = IFetchCategoriesAction | IFetchCategoriesActionSuccess | IFetchCategoriesActionError