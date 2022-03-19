import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { IAccount } from '../../../types/account'
import { ICategory } from '../../../types/category'
import icons from '../../../utils/icons/icons'
import { InputField } from '../input-field/InputField'
import './select-field.css'

export type TSelectOption = string | number

interface ISelectFieldFetchProps {
    label: string,
    name: string,
    value: TSelectOption,
    onChange: (name: string, value: string | number) => void,
    fetchOptions: (cb: (res: any) => void) => Promise<void>,
}


export const SelectFieldFetch: React.FC<ISelectFieldFetchProps> = (props) => {
    const { name, value, label, onChange, fetchOptions } = props
    const [show, setShow] = useState<boolean>(false)
    const [fetchedOptions, setFetchedOptions] = useState<TSelectOption[]>()
    const [loadingOptions, setLoadingOptions] = useState<boolean>(false)
    const selectRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = useCallback(event => {
        if (!selectRef.current?.contains(event.target)) {
            // console.log('Clicked outside select');
            // CLICKED OUTSIDE THE SELECT
            // THUS CLOSE OPTIONS DIV AND CLEAR SEARCH TEXT (so all options could be seen next time select gets opened)
            setShow(false)
            // setSearchText('')
            
            // // // AND HANDLE INPUT FIELD VALUE, SEARCH TEXT VALUE AND LABEL STYLES
            // const label = selectRef.current.querySelector('label')

            // if (lowerCaseString(selectedOption)) {
            //     label.classList.add('focused', 'filled')
            //     setInputValue(selectedOption)
            // } else {
            //     label.classList.remove('focused', 'filled')
            //     setInputValue('')
            // }
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
        const cb = (items: IAccount[] | ICategory[]) => {
            console.log(items)  // HANDLE ERRORS
            const itemsList = items.map(item => item.name)
            console.log(items, itemsList);
            setFetchedOptions(itemsList)
            setLoadingOptions(false)
        }

        if (!show) {
            selectRef.current?.querySelector('input')?.focus()
            setLoadingOptions(true)
            fetchOptions(cb)
        }
        
        setShow(oldValue => !oldValue)
    }

    return (
        <div className='select-field' ref={selectRef}>
            <div onClick={toggleOptions}>
                <InputField type='text' label={label} name={name} value={value} onChange={() => {}} readonly/>
                {show 
                ? <icons.GENERAL_ICONS.IoIosArrowUp className='select-field__arrow'/> 
                : <icons.GENERAL_ICONS.IoIosArrowDown className='select-field__arrow'/>
                }
            </div>
            
            <ul className="select-field__options" id="cars" style={{ display: show ? 'block' : 'none' }}>
                {loadingOptions
                ? <li className='select-field__option loading-option'>Loading options...</li>
                : fetchedOptions 
                  ? fetchedOptions.map(option => <li key={option} className='select-field__option' onClick={handleOptionClick(option)}>{option}</li>)
                  : <li className='select-field__option no-option'>No options found</li>
                }
            </ul>
        </div>
    )
}
