import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// import { useTypedSelector } from '../../hooks/useTypedSelector'
import './navbar.css'

enum EDefaultTransactionQueries {
    type = 'expense',
    grouped = 'true',
    period = 'day',
}

export const NavBar: React.FC = () => {
    // const name = useTypedSelector(state => state.user.name)
    return (
        <nav className="navbar">
            <div className="navbar__center">
                <div className="navbar__left">
                    <Link to='/'>YFinance App</Link>
                </div> 
                {/* <div className="navbar__middle"> */}
                <ul className='navbar__middle'>
                    <NavLink 
                        to='/' 
                        // className={({ isActive }) => isActive ? "activeeee": ''}  // BY DEFAULT ACTIVE CLASS IS ASSIGNED 
                    >Home</NavLink>
                    <NavLink to='/accounts'>Accounts</NavLink>
                    <NavLink to='/categories'>Categories</NavLink>
                    <NavLink to={`/transactions?type=${EDefaultTransactionQueries.type}&grouped=${EDefaultTransactionQueries.grouped}&period=${EDefaultTransactionQueries.period}`}>Transactions</NavLink>
                    {/* <NavLink to={`/${name}`}>My Profile</NavLink> */}
                    <NavLink to={`/profile`}>My Profile</NavLink>
                </ul>

                {/* </div> */}
                <div className="navbar__right">Social Networks</div>
            </div>
        </nav>
    )
}
