import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchUsers } from '../../store/action-creators/users';

const url = 'https://fakestoreapi.com/products'

export const UserList: React.FC = () => {
    const { users, loading, error } = useTypedSelector(state => state.users)
    // const dispatch = useDispatch()
    const { fetchUsers } = useActions()

    useEffect(() => {
        // dispatch(fetchUsers(url))
        // fetchUsers(url)
    }, [])

    if (loading) return (
        <h1>Loading...</h1>
    )

    if (error) return (
        <h1>{error}</h1>
    )
    
    return (
        <div>UserList</div>
    )
}
