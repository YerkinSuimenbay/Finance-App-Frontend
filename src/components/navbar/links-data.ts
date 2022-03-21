
export enum EDefaultTransactionQueries {
    type = 'expense',
    grouped = 'true',
    period = 'day',
}

export const links = [
    {
        label: 'Home',
        icon: 'AiOutlineHome',
        to: '/'
    },
    {
        label: 'Accounts',
        icon: 'MdAccountBalance',
        to: '/accounts'
    },
    {
        label: 'Categories',
        icon: 'MdCategory',
        to: '/categories'
    },
    {
        label: 'Transactions',
        icon: 'FaTenge',
        to: `/transactions?type=${EDefaultTransactionQueries.type}&grouped=${EDefaultTransactionQueries.grouped}&period=${EDefaultTransactionQueries.period}`,
    },
    {
        label: 'My Profile',
        icon: 'BsFillFilePersonFill',
        to: '/profile'
    },
    {
        label: 'Settings',
        icon: 'FiSettings',
        to: '/settings'
    },
]