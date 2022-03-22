import React from 'react'
import { Link } from 'react-router-dom'
import { 
    VKShareButton, VKIcon, 
    TwitterShareButton, TwitterIcon,
    FacebookShareButton, FacebookIcon, 
    TelegramShareButton, TelegramIcon,
    WhatsappShareButton, WhatsappIcon,
} from 'react-share'

import { AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineLogout } from 'react-icons/hi'
// import { useTypedSelector } from '../../hooks/useTypedSelector'
import './navbar.css'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { Links } from './Links'
import { useIsMobile } from '../../hooks/useIsMobile'

const SOCIAL_MEDIA_ICON_SIZE = 25
const SOCIAL_MEDIA_SHARE_URL = window.location.href

export const NavBar: React.FC = () => {
    const { visible: sidebarVisible } = useTypedSelector(state => state.sidebar)
    const { currentPage } = useTypedSelector(state => state.page)
    const { showSidebar, hideSidebar } = useActions()


    const isMobile = useIsMobile()
    
    return (
        <nav className="navbar">
            <div className="navbar__center">
                <div className="navbar__left">
                    <Link to='/'>
                        {!isMobile || currentPage === 'Home' 
                          ? 'YFinance App'
                          : currentPage
                        }
                    </Link>
                    <button className="burger-menu" onClick={() => showSidebar()}>
                        {sidebarVisible 
                        ? null
                        : <AiOutlineMenu />
                    }
                    </button>
                </div> 
                
                <ul className='navbar__middle'>
                    <Links type='navbar' />
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
        </nav>
    )
}
