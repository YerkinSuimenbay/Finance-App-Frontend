import React from 'react'
import icons from '../../utils/icons/icons'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { links } from './links-data'


interface ILinksProps {
    type: 'navbar' | 'sidebar'
}

export const Links: React.FC<ILinksProps> = (props) => {
    const { type } = props

    const { hideSidebar, updatePage } = useActions()
   

    const handleNavLinkClick = (label: string) => {
        return () => {
            hideSidebar()

            // const pageLabel = label.toLowerCase() as TPages
            // updatePage(pageLabel)
            updatePage(label)
        }
    }

    return (
        <>
            {links.map(link => {
                const { label, to, icon } = link
                const Icon = icon ? icons.SIDEBAR_ICONS[icon] : icons.SIDEBAR_ICONS.AiOutlineHome
                
                return <li>
                <NavLink 
                    to={to}
                    onClick={handleNavLinkClick(label)}

                    // className={({ isActive }) => isActive ? "activeeee": ''}  // BY DEFAULT ACTIVE CLASS IS ASSIGNED 
                >
                <Icon />
                <span>{label}</span>
                </NavLink>
            </li>
            })}
        </>
    )
}
