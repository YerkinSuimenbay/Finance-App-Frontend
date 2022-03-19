import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { 
    VKShareButton, VKIcon, 
    TwitterShareButton, TwitterIcon,
    FacebookShareButton, FacebookIcon, 
    TelegramShareButton, TelegramIcon,
    WhatsappShareButton, WhatsappIcon,
} from 'react-share'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { HiOutlineLogout } from 'react-icons/hi'
// import { useTypedSelector } from '../../hooks/useTypedSelector'
import './navbar.css'
import icons from '../../utils/icons/icons'

export enum EDefaultTransactionQueries {
    type = 'expense',
    grouped = 'true',
    period = 'day',
}

const SOCIAL_MEDIA_ICON_SIZE = 25
const SOCIAL_MEDIA_SHARE_URL = window.location.href
console.log(SOCIAL_MEDIA_SHARE_URL);


export const NavBar: React.FC = () => {
    // const name = useTypedSelector(state => state.user.name)

    const [sidebarVisible, setSidebarVisible] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar__center">
                <div className="navbar__left">
                    <Link to='/'>YFinance App</Link>
                    <button className="burger-menu" onClick={() => setSidebarVisible(true)}>
                        {sidebarVisible 
                        ? <AiOutlineMenuFold />
                        : <AiOutlineMenuUnfold />
                    }
                    </button>
                </div> 
                
                <ul className='navbar__middle'>
                    <li>
                        <NavLink 
                            to='/' 
                            // className={({ isActive }) => isActive ? "activeeee": ''}  // BY DEFAULT ACTIVE CLASS IS ASSIGNED 
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/accounts'>Accounts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categories'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/transactions?type=${EDefaultTransactionQueries.type}&grouped=${EDefaultTransactionQueries.grouped}&period=${EDefaultTransactionQueries.period}`}>Transactions</NavLink>
                    </li>
                    <li>
                        {/* <NavLink to={`/${name}`}>My Profile</NavLink> */}
                        <NavLink to={`/profile`}>My Profile</NavLink>
                    </li>
                </ul>

                <div className="navbar__right">
                    {/* Social Networks */}
                    <VKShareButton 
                         url={SOCIAL_MEDIA_SHARE_URL}
                        className="network-share-button network-share-button__vk"
                    >
                        <VKIcon size={SOCIAL_MEDIA_ICON_SIZE} round />
                    </VKShareButton>
                    <TwitterShareButton
                        url={SOCIAL_MEDIA_SHARE_URL}
                        className="network-share-button network-share-button__twitter"
                    >
                        <TwitterIcon size={SOCIAL_MEDIA_ICON_SIZE} round />
                        {/* Twitter share */}
                    </TwitterShareButton>

                    <FacebookShareButton
                        url={SOCIAL_MEDIA_SHARE_URL}
                        className="network-share-button network-share-button__facebook"
                    >
                        <FacebookIcon size={SOCIAL_MEDIA_ICON_SIZE} round /> 
                        {/* Facebook share */}
                    </FacebookShareButton>
                    <TelegramShareButton
                        url={SOCIAL_MEDIA_SHARE_URL}
                        className="network-share-button network-share-button__telegram"

                    >
                        <TelegramIcon size={SOCIAL_MEDIA_ICON_SIZE} round /> 
                    </TelegramShareButton>
                    <WhatsappShareButton
                        url={SOCIAL_MEDIA_SHARE_URL}
                        className="network-share-button network-share-button__whatsapp"
                    >
                        <WhatsappIcon size={SOCIAL_MEDIA_ICON_SIZE} round /> 
                    </WhatsappShareButton>
                </div>
            </div>

            <div 
                className={sidebarVisible ? 'background sidebar show' : `background sidebar`} 
                onClick={() => setSidebarVisible(false)}
            >
                <div className="sidebar__center">
                    <div className="sidebar__top">
                        {/* <img src="" alt="" /> */}
                        <Link to='/' className='sidebar__title'>YFinance App</Link>
                    </div>
                    <div className='sidebar__middle'>
                        <ul className='sidebar__middle__links'>
                            <li>
                                <NavLink 
                                    to='/' 
                                    // className={({ isActive }) => isActive ? "activeeee": ''}  // BY DEFAULT ACTIVE CLASS IS ASSIGNED 
                                >
                                <icons.GENERAL_ICONS.MdOutlineAddBox />
                                <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/accounts'>
                                    <icons.GENERAL_ICONS.MdOutlineAddBox />
                                    <span>Accounts</span>    
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/categories'>
                                    <icons.GENERAL_ICONS.MdOutlineAddBox />
                                    <span>Categories</span>    
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={`/transactions?type=${EDefaultTransactionQueries.type}&grouped=${EDefaultTransactionQueries.grouped}&period=${EDefaultTransactionQueries.period}`}>
                                        <icons.GENERAL_ICONS.MdOutlineAddBox />
                                        <span>Transactions</span>    
                                </NavLink>
                            </li>
                            <li>
                                {/* <NavLink to={`/${name}`}>My Profile</NavLink> */}
                                <NavLink to={`/profile`}>
                                    <icons.GENERAL_ICONS.MdOutlineAddBox />
                                    <span>My Profile</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar__bottom">
                        <button className='sidebar__bottom__logout-btn'>
                            <HiOutlineLogout />
                            <span>Log out</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
