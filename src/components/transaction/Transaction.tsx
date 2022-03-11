import React, { useState } from "react"
import './transaction.css'
import icons from '../../utils/icons/icons'
import { ITransaction } from "../../types/transaction"
import { useActions } from "../../hooks/useActions"
import axios from "axios"
import { formatValue } from "../../utils/js/formatValue"

interface ITransactionProps extends ITransaction {
    // onClick: (id: string) => void;
}

  
export const Transaction: React.FC<ITransactionProps> = (props) => {
    const { _id, type, amount, account, currency, color, comment, category, createdAt, updatedAt } = props
    
    const { fetchTransaction, showSwipe, showFeedback } = useActions()

    const [showTransitionInDetail, setShowTransitionInDetail] = useState(false)
    const [categorizedTransactions, setCategorizedTransactions] = useState<ITransaction[] | []>([])
    const [loadiengCategorizedTransactions, setLoadingCategorizedTransactions] = useState(false)

    const handleTransactionClick = async (transactionId: string) => {
        const acc = await fetchTransaction(`/transactions/${transactionId}`)
    
        // setFormTransaction(acc as unknown as ITransaction)
        showSwipe('left', 'transactions', 'edit')
    }

    const handleGroupedTransactionClick = async () => {
        try {
            setLoadingCategorizedTransactions(true)
            setShowTransitionInDetail(oldValue => !oldValue)

            const res = await axios.get(`/transactions?type=${type}&category=${category}`)

            setCategorizedTransactions(res.data.transactions)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                showFeedback('danger', error.response?.data.msg || 'Server Error')
            }
        } finally {
            setLoadingCategorizedTransactions(false)
        }
    }


    return (
        <div className={showTransitionInDetail ? 'transaction-container show-in-detail' : 'transaction-container'} >
            <div className='transaction list-item' onClick={() => handleGroupedTransactionClick()}>
                <div className="transaction__left list-item__left" style={{ background: color }}>
                    {<icons.AiOutlineBank className="bank"/>}
                </div>
                <div className="transaction__middle list-item__middle">{category}</div>
                <div className="transaction__right list-item__right">{formatValue(amount, 'number')} {currency}</div>
            </div>
    
        <div className="transaction-in-detail" style={{ display: showTransitionInDetail ? 'block' : 'none' }}>
            {loadiengCategorizedTransactions 
            ? <div className="transaction-in-detail__loading">Loading...</div> 
            : categorizedTransactions.map(transaction => (
            <div key={transaction._id} className="transaction-in-detail__item" onClick={() => handleTransactionClick(transaction._id)}>
                <div className="transaction-in-detail__item__left">
                    <span>{transaction.updatedAt.slice(0, 10)}</span>
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