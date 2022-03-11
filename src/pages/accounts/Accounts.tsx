import React, { useEffect } from 'react'
import { Account } from '../../components/account/Account'
import { CreateButton } from '../../components/buttons/create/CreateButton'
import { LoaderComponent } from '../../components/loader/Loader'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import './accounts.css'

const URL = '/accounts'

export const Accounts: React.FC = () => {
  const { accounts, loading, error } = useTypedSelector(state => state.accounts)
  const { account, swipe } = useTypedSelector(state => state)
  const { fetchAccounts, showSwipe, createAccount } = useActions()

  useEffect(() => {
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
      <header className='page__title'>Accounts</header>
    
      <div className="page__list">
        {accounts.map(account => <Account key={account._id} {...account} />)}
      </div>
        
      <CreateButton onClick={onClick} label="account"/>
    </div>
  )
}


