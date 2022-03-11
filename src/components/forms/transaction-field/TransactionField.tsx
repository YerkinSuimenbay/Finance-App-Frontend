import React, { useState } from 'react'
import { ECurrency } from '../../../types/account'
import { InputField } from '../input-field/InputField'
import './transaction-field.css'

export type TInputType = 'text' | 'email' | 'number' | 'date' | 'password' | 'color' | 'radio'
export type TInputFieldType = Exclude<TInputType, 'radio'>

interface ITransactionFieldProps {
  type: TInputFieldType,
  label: string,
  name: string,
  value: string | number,
  onChange: (name: string, value: string | number) => void,
  currency: ECurrency,
  readonly?: boolean,
}

export const TransactionField: React.FC<ITransactionFieldProps> = (props) => {
  const { value, name, type, onChange, currency, label, readonly=false } = props

  return (
    <div className='transaction-field'>
        <InputField type={type} label={label} name={name} value={value} onChange={onChange}/>
        <span className='transaction-field__currency'>{currency}</span> 
    </div>
  )
}