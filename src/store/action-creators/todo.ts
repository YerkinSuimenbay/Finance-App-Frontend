import axios from "axios"
import { Dispatch } from "redux"
import { ETodoActionTypes, TTodoAction } from "../../types/todo"

export const fetchTodos = (url: string) => {
    return async (dispatch: Dispatch<TTodoAction>) => {
        try {
            dispatch({ type: ETodoActionTypes.FETCH_TODOS })
            const res = await axios.get(url)
            dispatch({ type: ETodoActionTypes.FETCH_TODOS_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: ETodoActionTypes.FETCH_TODOS_ERROR, payload: 'Error while fetching todos' })
        }
    }
}

export const setTodoPage = (page: number): TTodoAction => {
    return { type: ETodoActionTypes.SET_TODOS_PAGE, payload: page }
} 