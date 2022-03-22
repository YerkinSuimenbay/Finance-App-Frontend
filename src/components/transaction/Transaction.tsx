import React, { useState } from "react"
import './transaction.css'
import icons from '../../utils/icons/icons'
import { ITransaction } from "../../types/transaction"
import { useActions } from "../../hooks/useActions"
import axios from "axios"
import { formatValue } from "../../utils/js/formatValue"
import moment from 'moment'
import 'moment/locale/ru'
import { TPeriod } from "../forms/period-field/PeriodField"
import { useQuery } from "../../hooks/useQuery"
// moment.locale('ru')
interface IGroupedTransactionProps extends Omit<ITransaction, '_id account' | 'account' | 'comment' | 'createdAt' | 'updatedAt'> {
    // onClick: (id: string) => void;
}

  
export const Transaction: React.FC<IGroupedTransactionProps> = (props) => {
    const { type, amount, currency, color, category, icon, percentage } = props
    
    const { fetchTransaction, showSwipe, showFeedback } = useActions()

    const query = useQuery()
    const period = query.get('period') as TPeriod
    const from = query.get('from')
    const to = query.get('to')


    const [showTransitionInDetail, setShowTransitionInDetail] = useState(false)
    const [categorizedTransactions, setCategorizedTransactions] = useState<ITransaction[] | []>([])
    const [loadingCategorizedTransactions, setLoadingCategorizedTransactions] = useState(false)

    const handleTransactionClick = async (transactionId: string) => {
        // PREVENTS CLICK EVENT WHEN SELECTING --- START
        const selection = window.getSelection();
        // console.log(selection.toString());
        if(selection?.toString()) return
        // PREVENTS CLICK EVENT WHEN SELECTING --- FINISH

        const acc = await fetchTransaction(`/transactions/${transactionId}`)
    
        // setFormTransaction(acc as unknown as ITransaction)
        showSwipe('left', 'transactions', 'edit')
    }

    const handleGroupedTransactionClick = async () => {
        // PREVENTS CLICK EVENT WHEN SELECTING --- START
        const selection = window.getSelection();
        // console.log(selection.toString());
        if(selection?.toString()) return
        // PREVENTS CLICK EVENT WHEN SELECTING --- FINISH
        
        try {
            setLoadingCategorizedTransactions(true)
            setShowTransitionInDetail(oldValue => !oldValue)

            let URL = `/transactions?type=${type}&category=${category}&period=${period}`
            if (from && to) URL += `&from=${from}&to=${to}` 
            
            const res = await axios.get(URL)

            setCategorizedTransactions(res.data.transactions)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                showFeedback('danger', error.response?.data.msg || 'Server Error')
            }
        } finally {
            setLoadingCategorizedTransactions(false)
        }
    }

    let Icon = icon ? icons.CATEGORY_ICONS[icon]  : icons.CATEGORY_ICONS.AiOutlineBank
    return (
        <div className={showTransitionInDetail ? 'transaction-container show-in-detail' : 'transaction-container'} >
            <div className='transaction list-item' onClick={() => handleGroupedTransactionClick()}>
                <div className="transaction__left list-item__left" style={{ background: color }}>
                    <Icon />
                </div>
                <div className="transaction__middle list-item__middle">{category}</div>
                <div className="transaction__right list-item__right">
                    <span className="transaction__right__percentage">{percentage}% </span>
                    <span className="transaction__right__amount">{formatValue(amount, 'number')} {currency}</span>
                </div>
            </div>
    
        <div className="transaction-in-detail" style={{ display: showTransitionInDetail ? 'block' : 'none' }}>
            {loadingCategorizedTransactions 
            ? <div className="transaction-in-detail__loading">Loading...</div> 
            : categorizedTransactions.map(transaction => (
            <div key={transaction._id} className="transaction-in-detail__item" onClick={() => handleTransactionClick(transaction._id)}>
                <div className="transaction-in-detail__item__left">
                    {/* <span>{moment(transaction.updatedAt.slice(0, 10)).format('DD-MM-YYYY')}</span> */}
                    <span>{moment(transaction.createdAt).format('Do MMMM YYYY')}</span>
                    <span>{transaction.comment}</span>
                </div>
                <div className="transaction-in-detail__item__right">
                    <span>{formatValue(transaction.amount, 'number')} {transaction.currency}</span>
                    <span>{transaction.account}</span>
                </div>
            </div>
            ))
            }
        </div>
        </div>
    )
}