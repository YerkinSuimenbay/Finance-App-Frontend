import React from 'react'
import { ETransactionType } from '../../types/transaction'
import './switchExpenseIncome.css'

interface ISwitchExpenseIncomeProps {
    onClick: (newTransactionType: ETransactionType) => void,
    type: ETransactionType,
}

export const SwitchExpenseIncome: React.FC<ISwitchExpenseIncomeProps> = (props) => {
    const { onClick, type } = props
    return (
        <div className='switchExpenseIncome'>
            <button onClick={() => onClick(ETransactionType.EXPENSE)} className={type === ETransactionType.EXPENSE ? 'active' : ''}>{ETransactionType.EXPENSE.toUpperCase()}</button>
            <button onClick={() => onClick(ETransactionType.INCOME)} className={type === ETransactionType.INCOME ? 'active' : ''}>{ETransactionType.INCOME.toUpperCase()}</button>
        </div>
    )
}
