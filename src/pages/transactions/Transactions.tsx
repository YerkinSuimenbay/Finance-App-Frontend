import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateButton } from '../../components/buttons/create/CreateButton'
import { LoaderComponent } from '../../components/loader/Loader'
import { Transaction } from '../../components/transaction/Transaction'
import { useActions } from '../../hooks/useActions'
import { useQuery } from '../../hooks/useQuery'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ETransactionType } from '../../types/transaction'
import icons from '../../utils/icons/icons'
import './transactions.css'




export const Transactions: React.FC = () => {
  const { transactions, loading, error } = useTypedSelector(state => state.transactions)
  const { account, swipe } = useTypedSelector(state => state)
  const { fetchTransactions, showSwipe, createTransaction } = useActions()
  
  const navigate = useNavigate()
  const query = useQuery()
  const transactionType = query.get('type')
  const grouped = query.get('grouped')
  
  
  useEffect(() => {
    const URL = `/transactions?type=${transactionType}&grouped=${grouped}`
    fetchTransactions(URL)
  }, [transactionType, grouped])


  const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    createTransaction()
    showSwipe('left', 'transactions', 'create')
  }

  const switchTransactions = (newTransactionType: ETransactionType) => {
    navigate(`/transactions?type=${newTransactionType}&grouped=${grouped}`)
  }

  if (loading) {
    return <LoaderComponent text='Loading transactions...'/>
  }
  
  if (error) {
    return <h2 className='error-msg'>{error}</h2>
  }

  return (
    <div className='page transactions-page'>
      <header className='page__title'>Transactions</header>

      <div className='transactions__switch'>
        <button onClick={() => switchTransactions(ETransactionType.EXPENSE)} className={transactionType === ETransactionType.EXPENSE ? 'active' : ''}>{ETransactionType.EXPENSE.toUpperCase()}</button>
        <button onClick={() => switchTransactions(ETransactionType.INCOME)} className={transactionType === ETransactionType.INCOME ? 'active' : ''}>{ETransactionType.INCOME.toUpperCase()}</button>
      </div>
    
  
      <div className="page__list">
        {transactions.length 
        ? transactions.map(transaction => <Transaction key={transaction.category} {...transaction} />)
        : <div className='no-transaction'>
            <icons.BsSearch className="no-transaction__top" style={{width: 50}} />
            <span className="no-transaction__bottom">No Transaction Found</span>
          </div>
        }
      </div>




      <CreateButton onClick={onClick} label="transaction"/>
    </div>
  )
}


