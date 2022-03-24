import React from 'react'
import icons from '../../utils/icons/icons'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// import { links } from './links-data'
import { useTranslation, initReactI18next } from "react-i18next";


interface ILinksProps {
    type: 'navbar' | 'sidebar'
}

export enum EDefaultTransactionQueries {
    type = 'expense',
    grouped = 'true',
    period = 'day',
}


export const Links: React.FC<ILinksProps> = (props) => {
    const { type } = props
    const { settings: { default_period } } = useTypedSelector(state => state.user)
    const { hideSidebar } = useActions()

    const { t } = useTranslation();

    const links = [
        // {
        //     label: t('Home'),
        //     icon: 'AiOutlineHome',
        //     to: '/'
        // },
        {
            label: t('Accounts'),
            icon: 'MdAccountBalance',
            to: '/accounts'
        },
        {
            label: t('Categories'),
            icon: 'MdCategory',
            to: `/categories?type=${EDefaultTransactionQueries.type}`
        },
        {
            label: t('Transactions'),
            icon: 'FaTenge',
            to: `/transactions?type=${EDefaultTransactionQueries.type}&grouped=${EDefaultTransactionQueries.grouped}&period=${default_period.toLowerCase() || EDefaultTransactionQueries.period}`,
        },
        {
            label: t('My Profile'),
            icon: 'BsFillFilePersonFill',
            to: '/profile'
        },
        {
            label: t('Settings'),
            icon: 'FiSettings',
            to: '/settings'
        },
    ]

    return (
        <>
            {links.map((link) => {
                const { label, to, icon } = link
                const Icon = icon ? icons.SIDEBAR_ICONS[icon] : icons.SIDEBAR_ICONS.AiOutlineHome
                
                return <li key={to}>
                <NavLink 
                    to={to}
                    onClick={() => hideSidebar()}

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
