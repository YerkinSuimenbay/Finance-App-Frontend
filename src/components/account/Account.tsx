import React from "react"
import './account.css'
import icons from '../../utils/icons/icons'
import { IAccount } from "../../types/account"
import { useActions } from "../../hooks/useActions"
import { formatValue } from "../../utils/js/formatValue"

interface IAccountProps extends IAccount {
    // onClick: (id: string) => void;
}

  
export const Account: React.FC<IAccountProps> = (props) => {
    const { color, _id, name, currency, totalCash } = props

    const { fetchAccount, setFormAccount, showSwipe } = useActions()
    const handleAccountClick = async (accountId: string) => {
        console.log(accountId);
        const acc = await fetchAccount(`/accounts/${accountId}`)
        // console.log(account,swipe);
        console.log(acc);
    
        setFormAccount(acc as unknown as IAccount)
        showSwipe('left', 'accounts', 'edit')
    }
    return (
        <div className='account list-item' onClick={() => handleAccountClick(_id)}>
            <div className="account__left list-item__left" style={{ background: color }}>
                {<icons.AiOutlineBank className="bank"/>}
            </div>
            <div className="account__middle list-item__middle">{name}</div>
            <div className="account__right list-item__right">{formatValue(totalCash, 'number')} {currency}</div>
        </div>
    )
}