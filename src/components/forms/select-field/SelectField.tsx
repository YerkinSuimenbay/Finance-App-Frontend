import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { IAccount } from '../../../types/account'
import icons from '../../../utils/icons/icons'
import { InputField } from '../input-field/InputField'
import './select-field.css'

// export interface ISelectOption {
//     value: string | number,
//     display_value: string,
//     checked?: boolean
// }

export type TSelectOption = string | number

interface ISelectFieldProps {
    label: string,
    name: string,
    options: TSelectOption[],
    value: TSelectOption,
    onChange: (name: string, value: string | number) => void,
}


export const SelectField: React.FC<ISelectFieldProps> = (props) => {
    const { name, options, value, label, onChange } = props
    const [show, setShow] = useState<boolean>(false)
    const selectRef = useRef<HTMLDivElement>(null)


    const handleClickOutside = useCallback(event => {
        if (!selectRef.current?.contains(event.target)) {
            setShow(false)
        }
      }, []);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [handleClickOutside])

    const handleOptionClick = (option: TSelectOption) => {
        return (event: React.MouseEvent<HTMLLIElement>) => {
            setShow(false)
            onChange(name, option)
        }
    }

    const toggleOptions = () => {
        show || selectRef.current?.querySelector('input')?.focus()
        
        setShow(oldValue => !oldValue)
    }
    const ArrowIcon = show 
    ? icons.GENERAL_ICONS.IoIosArrowUp 
    : icons.GENERAL_ICONS.IoIosArrowDown


    return (
        <div className='select-field' ref={selectRef}>
            <div onClick={toggleOptions}>
                <InputField type='text' label={label} name={name} value={value} onChange={() => {}} readonly/>
                <ArrowIcon className='select-field__arrow' style={{ top: label || '50%', transform: label || "translateY(-50%)" }} />
            </div>
            
            <ul className="select-field__options" style={{ display: show ? 'block' : 'none', top: label || '44px' }}>
                {options.length 
                ? options.map(option => <li key={option} className='select-field__option' onClick={handleOptionClick(option)}>{option}</li>)
                : <li className='select-field__option no-option'>No options found</li>
                }
            </ul>
        </div>
    )
}
