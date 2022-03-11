import { ETodoActionTypes, ITodoState, TTodoAction } from "../../types/todo"

const initialState: ITodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
}

export const todoReducer = (state = initialState, action: TTodoAction): ITodoState => {
    switch (action.type) {
        case (ETodoActionTypes.FETCH_TODOS):
            return { ...state, loading: true}
        case (ETodoActionTypes.FETCH_TODOS_SUCCESS):
            return { ...state, loading: false, todos: action.payload }
        case (ETodoActionTypes.FETCH_TODOS_ERROR):
            return { ...state, loading: false, error: action.payload  }
        case (ETodoActionTypes.SET_TODOS_PAGE):
            return { ...state, page: action.payload}
        default:
            return state
    }
}