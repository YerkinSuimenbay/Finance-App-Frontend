import React, { useState } from 'react'
import './input-field.css'

export type TInputType = 'text' | 'email' | 'number' | 'date' | 'password' | 'color' | 'radio'
export type TInputFieldType = Exclude<TInputType, 'radio'>

interface IInputFieldProps {
  type: TInputFieldType,
  label: string,
  name: string,
  value: string | number,
  onChange: (name: string, value: string | number) => void,
  readonly?: boolean,
}

export const InputField: React.FC<IInputFieldProps> = (props) => {
  const { value, name, type, onChange, label, readonly=false } = props

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.name, event.target.value)
  }

  return (
    <div className='input-field'>
      <label htmlFor={name} className=''>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={handleChange} readOnly={readonly}/>
    </div>
  )
}