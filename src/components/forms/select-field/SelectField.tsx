import React, { useMemo, useState } from 'react'
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
    fetchOptions?: (cb: (res: any) => void) => void,
}


export const SelectField: React.FC<ISelectFieldProps> = (props) => {
    const { name, options, value, label, onChange, fetchOptions } = props
    const [show, setShow] = useState<boolean>(false)
    const [fetchedOptions, setFetchedOptions] = useState<TSelectOption[]>()

    const handleOptionClick = (option: TSelectOption) => {
        return (event: React.MouseEvent<HTMLLIElement>) => {
            setShow(false)
            onChange(name, option)
        }
    }

    const toggleOptions = () => {
        const cb = (accounts: IAccount[]) => {
            const accountsList = accounts.map((account) => account.name)
            console.log(accounts, accountsList);
            setFetchedOptions(accountsList)
        }
        fetchOptions && fetchOptions(cb)
        
        setShow(oldValue => !oldValue)
    }

    return (
        <div className='select-field'>
            <div onClick={toggleOptions}>
                <InputField type='text' label={label} name={name} value={value} onChange={() => {}} readonly/>
                {show 
                ? <icons.GENERAL_ICONS.IoIosArrowUp className='select-field__arrow'/> 
                : <icons.GENERAL_ICONS.IoIosArrowDown className='select-field__arrow'/>
                }
            </div>
            
            <ul className="select-field__options" id="cars" style={{ display: show ? 'block' : 'none' }}>
                {options.length 
                ? options.map(option => <li key={option} className='select-field__option' onClick={handleOptionClick(option)}>{option}</li>)
                : <li className='select-field__option no-option'>No options found</li>
                }
                {/* {fetchOptions ? 

                } */}
            </ul>
        </div>
    )
}
