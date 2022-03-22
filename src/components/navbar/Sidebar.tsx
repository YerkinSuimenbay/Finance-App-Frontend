import { HiOutlineLogout } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Links } from './Links'

import './sidebar.css'

export const Sidebar: React.FC = () => {
    const { visible: sidebarVisible } = useTypedSelector(state => state.sidebar)
    const { hideSidebar, logoutUser } = useActions()

    const handleHideSidebar = () => hideSidebar()

    const logout = () => {
        localStorage.removeItem('financeAppToken')
        localStorage.removeItem('financeAppUserInfo')
        logoutUser()
        hideSidebar()
      }

    return (
        <div 
            className={sidebarVisible ? 'background sidebar show' : `background sidebar`} 
            onClick={handleHideSidebar}
        >
            <div className="sidebar__center" onClick={e => e.stopPropagation()}>
                <div className="sidebar__top">
                    {/* <img src="" alt="" /> */}
                    <Link to='/' className='sidebar__title' onClick={handleHideSidebar}>YFinance App</Link>
                </div>
                <div className='sidebar__middle'>
                    <ul className='sidebar__middle__links'>
                        <Links type='sidebar' />
                    </ul>
                </div>
                <div className="sidebar__bottom">
                    <button className='sidebar__bottom__logout-btn' onClick={logout}>
                        <HiOutlineLogout />
                        <span>Log out</span>
                    </button>
                </div>
            </div>
        </div>
    )
}