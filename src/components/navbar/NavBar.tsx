import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { 
    VKShareButton, VKIcon, 
    TwitterShareButton, TwitterIcon,
    FacebookShareButton, FacebookIcon, 
    TelegramShareButton, TelegramIcon,
    WhatsappShareButton, WhatsappIcon,
} from 'react-share'
// import { useTypedSelector } from '../../hooks/useTypedSelector'
import './navbar.css'

enum EDefaultTransactionQueries {
    type = 'expense',
    grouped = 'true',
    period = 'day',
}

const SOCIAL_MEDIA_ICON_SIZE = 25
const SOCIAL_MEDIA_SHARE_URL = window.location.href
console.log(SOCIAL_MEDIA_SHARE_URL);


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
                <div className="navbar__right">
                    {/* Social Networks */}
                    <VKShareButton 
                         url={SOCIAL_MEDIA_SHARE_URL}
                    >
                        <VKIcon size={SOCIAL_MEDIA_ICON_SIZE} round />
                    </VKShareButton>
                    <TwitterShareButton
                        url={SOCIAL_MEDIA_SHARE_URL}
                    >
                        <TwitterIcon size={SOCIAL_MEDIA_ICON_SIZE} round />
                        {/* Twitter share */}
                    </TwitterShareButton>

                    <FacebookShareButton
                        url={SOCIAL_MEDIA_SHARE_URL}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={SOCIAL_MEDIA_ICON_SIZE} round /> 
                        {/* Facebook share */}
                    </FacebookShareButton>
                    <TelegramShareButton
                        url={SOCIAL_MEDIA_SHARE_URL}
                        className="Demo__some-network__share-button"
                    >
                        <TelegramIcon size={SOCIAL_MEDIA_ICON_SIZE} round /> 
                    </TelegramShareButton>
                    <WhatsappShareButton
                        url={SOCIAL_MEDIA_SHARE_URL}
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={SOCIAL_MEDIA_ICON_SIZE} round /> 
                    </WhatsappShareButton>
                </div>
            </div>
        </nav>
    )
}
