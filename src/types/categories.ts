import { ICategory } from "./category";



export interface ICategoriesState {
    categories: ICategory[],
    loading: boolean,
    error: null | string
}

export enum ECategoriesActionTypes {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
    CLEAN_UP_CATEGORIES = 'CLEAN_UP_CATEGORIES',
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

interface ICleanUpCategoriesAction {
    type: ECategoriesActionTypes.CLEAN_UP_CATEGORIES
}

export type TCategoriesAction = IFetchCategoriesAction | IFetchCategoriesActionSuccess | IFetchCategoriesActionError | ICleanUpCategoriesAction