export interface ITodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum ETodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

interface IFetchTodoAction {
    type: ETodoActionTypes.FETCH_TODOS
}

interface IFetchTodoActionSuccess {
    type: ETodoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}

interface IFetchTodoActionError {
    type: ETodoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}

interface ISetTodoPage {
    type: ETodoActionTypes.SET_TODOS_PAGE,
    payload: number
}

export type TTodoAction = IFetchTodoAction | IFetchTodoActionSuccess | IFetchTodoActionError | ISetTodoPage
