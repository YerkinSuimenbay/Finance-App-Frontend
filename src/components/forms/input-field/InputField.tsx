import React, { useState } from 'react'
import icons from '../../../utils/icons/icons'
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
  const { value, name, type, onChange, label, readonly=false, children } = props

  const [scopedType, setScopedType] = useState(type)

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.name, event.target.value)
  }

  // const ClosedEye = 

  return (
    <div className='input-field'>
      <label htmlFor={name} className=''>{label}</label>
      <input type={scopedType} id={name} name={name} value={value} onChange={handleChange} readOnly={readonly}/>
      {type === 'password' && scopedType === 'password' && <span onClick={() => setScopedType('text')}><icons.GENERAL_ICONS.AiFillEye className='password-eye' /></span>}
      {type === 'password' && scopedType === 'text' && <span onClick={() => setScopedType('password')}><icons.GENERAL_ICONS.AiFillEyeInvisible className='password-eye' /></span>}
      {/* {children} */}
    </div>
  )
}