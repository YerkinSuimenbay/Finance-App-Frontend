import React, { useEffect } from 'react'
import { Account } from '../../components/account/Account'
import { CreateButton } from '../../components/buttons/create/CreateButton'
import { LoaderComponent } from '../../components/loader/Loader'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import icons from '../../utils/icons/icons'
import { formatValue } from '../../utils/js/formatValue'

import './accounts.css'

const URL = '/accounts'

export const Accounts: React.FC = () => {
  const { data: { accounts, total }, loading, error } = useTypedSelector(state => state.accounts)
  const { account, swipe } = useTypedSelector(state => state)
  const { fetchAccounts, showSwipe, createAccount, updatePage } = useActions()

  useEffect(() => {
    updatePage('Accounts')
    fetchAccounts(URL)
  }, [])


  const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    createAccount()
    showSwipe('left', 'accounts', 'create')
  }

  if (loading) {
    return <LoaderComponent text='Loading accounts...'/>

  }
  
  if (error) {
    return <h2 className='error-msg'>{error}</h2>
  }
  // const account = {
  //   color: "cadetblue",
  //   id: "621cfbcf85961b76dc8502f1",
  //   name: "kaspi",
  //   currency: "KZT",
  //   totalCash: 4320,
  // }
  return (
    <div className='page accounts-page'>
      {/* <header className='page__title'>Accounts</header> */}
      <div className='accounts__total'>
        <span className='grey'>Total: </span>
        <span className='accounts__total__amount'>{formatValue(total, 'number')} KZT</span>
      </div>
    
      
      <div className="page__list">
        {accounts.length 
        ? accounts.map(account => <Account key={account._id} {...account} />)
        : <div className='no-item'>
            <icons.GENERAL_ICONS.BsSearch className="no-item__top" style={{ width: 50 }} />
            <span className="no-item__bottom">No Account Found</span>
          </div>
        }
      </div>
        
      <CreateButton onClick={onClick} label="account"/>
    </div>
  )
}


