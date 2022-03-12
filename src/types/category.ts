
export enum ECategoryType {
    INCOME = 'income',
    EXPENSE = 'expense',
}
export interface ICategory {
    _id: string,
    name: string,
    type: ECategoryType,
    color: string,
    icon: string
}
export interface ICategoryNew extends Omit<ICategory, '_id'>  {
    _id: ''
}

export interface ICategoryState {
    category: ICategory,
    loading: boolean,
    error: null | string,
}

export interface ICategoryEdit {
    key: string,
    value: string | number | boolean
}



export enum ECategoryActionTypes {
    FETCH_CATEGORY = 'FETCH_CATEGORY',
    FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS',
    FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR',

    EDIT_CATEGORY = 'EDIT_CATEGORY',
    
    CREATE_CATEGORY = 'CREATE_CATEGORY',
    DELETE_CATEGORY = 'DELETE_CATEGORY'
}

interface IFetchCategoryAction {
    type: ECategoryActionTypes.FETCH_CATEGORY,
}
interface IFetchCategoryActionSuccess {
    type: ECategoryActionTypes.FETCH_CATEGORY_SUCCESS,
    payload: ICategory
}
interface IFetchCategoryActionError {
    type: ECategoryActionTypes.FETCH_CATEGORY_ERROR,
    payload: string
}

interface IEditCategory {
    type: ECategoryActionTypes.EDIT_CATEGORY,
    payload: ICategoryEdit
}

interface ICreateCategoryAction {
    type: ECategoryActionTypes.CREATE_CATEGORY,
    payload: ICategoryNew
}


interface IDeleteCategory {
    type: ECategoryActionTypes.DELETE_CATEGORY,
    payload: string  // id
}

export type TCategoryAction = 
    IFetchCategoryAction | IFetchCategoryActionSuccess | IFetchCategoryActionError 
    | IEditCategory 
    | ICreateCategoryAction 
    | IDeleteCategory