import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateButton } from '../../components/buttons/create/CreateButton'
import { PeriodField, TPeriod } from '../../components/forms/period-field/PeriodField'
import { LoaderComponent } from '../../components/loader/Loader'
import { Transaction } from '../../components/transaction/Transaction'
import { useActions } from '../../hooks/useActions'
import { useQuery } from '../../hooks/useQuery'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ETransactionType } from '../../types/transaction'
import icons from '../../utils/icons/icons'
import './transactions.css'


interface FixedPeriod {
  newPeriod: TPeriod
}

interface RangePeriod {
  newPeriod: 'year',
  fromDate: string,
  toDate: string,
}

type PeriodFieldChange = FixedPeriod | RangePeriod


export const Transactions: React.FC = () => {
  const { transactions, loading, error } = useTypedSelector(state => state.transactions)
  const { account, swipe } = useTypedSelector(state => state)
  const { fetchTransactions, showSwipe, createTransaction, updatePage } = useActions()
  
  const navigate = useNavigate()
  const query = useQuery()
  const transactionType = query.get('type')
  const grouped = query.get('grouped')
  const period = query.get('period') as TPeriod
  const from = query.get('from')
  const to = query.get('to')
  
  useEffect(() => {
    updatePage('Transactions')

    console.log('useEffect CALL');
    
    let URL = `/transactions?type=${transactionType}&grouped=${grouped}&period=${period}`
    if (from && to) {
      URL += `&from=${from}&to=${to}` 
    }
    fetchTransactions(URL)
  // }, [transactionType, grouped, period, fromDate, toDate])
  }, [transactionType, grouped])


  const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    createTransaction()
    showSwipe('left', 'transactions', 'create')
  }

  const switchTransactions = (newTransactionType: ETransactionType) => {
    let URL = `/transactions?type=${newTransactionType}&grouped=${grouped}&period=${period}`
    // if (from && to) {
    //   URL += `&from=${from}&to=${to}` 
    // }

    navigate(URL)
  }

  const handlePeriodChange = (newPeriod: TPeriod, from?: string, to?: string) => {
    console.log({from, to});
    let URL = `/transactions?type=${transactionType}&grouped=${grouped}&period=${newPeriod}`
    if (from && to) {
      URL += `&from=${from}&to=${to}` 
    }
    fetchTransactions(URL)

    navigate(URL)
  }

  
  if (error) {
    return <h2 className='error-msg'>{error}</h2>
  }

  return (
    <div className='page transactions-page'>
      {/* <header className='page__title'>Transactions</header> */}

      <div className='transactions__switch'>
        <button onClick={() => switchTransactions(ETransactionType.EXPENSE)} className={transactionType === ETransactionType.EXPENSE ? 'active' : ''}>{ETransactionType.EXPENSE.toUpperCase()}</button>
        <button onClick={() => switchTransactions(ETransactionType.INCOME)} className={transactionType === ETransactionType.INCOME ? 'active' : ''}>{ETransactionType.INCOME.toUpperCase()}</button>
      </div>
    
      <div className='transactions__periods'>
        <PeriodField value={period} onChange={handlePeriodChange} from={from} to={to}/>
      </div>

     <div className={loading ? "page__list page__list__loading" : "page__list"}>
      {loading 
        ? <LoaderComponent text='Loading transactions...'/>
        : transactions.length 
          ? transactions.map(transaction => <Transaction key={transaction.category} {...transaction} />)
          : <div className='no-transaction'>
              <icons.GENERAL_ICONS.BsSearch className="no-transaction__top" style={{ width: 50 }} />
              <span className="no-transaction__bottom">No Transaction Found</span>
            </div>
      }
    </div>
    




      <CreateButton onClick={onClick} label="transaction"/>
    </div>
  )
}


