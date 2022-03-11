import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const url = 'https://fakestoreapi.com/products'

export const TodoList: React.FC = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(state => state.todo)
    // const dispatch = useDispatch()
    const { fetchTodos, setTodoPage } = useActions()

    useEffect(() => {
        fetchTodos(url)
    }, [page])

    if (loading) return (
        <h1>Loading...</h1>
    )

    if (error) return (
        <h1>{error}</h1>
    )
    
    return (
        <div>
            {todos.map(todo => {
                return <div 
                        style={{border: '1px solid', margin: '10px'}} 
                        key={todo.id}
                        onClick={() => setTodoPage(todo.id)}
                    >
                    {todo.price}
                </div>
            })}
        </div>
    )
}
