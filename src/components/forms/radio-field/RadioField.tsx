import React from 'react'
import './radio-field.css'

export interface IRadioGroupOption {
    value: string | number,
    display_value: string,
    checked?: boolean
}

interface IRadioFieldProps {
    label: string,
    name: string,
    options: IRadioGroupOption[],
    onChange: (name: string, value: string | number) => void,
}

export const RadioField: React.FC<IRadioFieldProps> = (props) => {
    const { name, options, label, onChange } = props
    // console.log('RADIO_FIELD: ', options);
    
    // const radioGroup = {
    //     label: 'Please select your favorite Web language:',
    //     name: 'fav_lang',
    //     options: [
    //         {
    //             value: 'html',
    //             display_value: 'HTML'
    //         },
    //         {
    //             value: 'css',
    //             display_value: 'CSS'
    //         },
    //         {
    //             value: 'js',
    //             display_value: 'JavaScript'
    //         },
    //     ]
    // }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.name, event.target.value)
    }

    return (
        <div className='radio-field'>
            <p className='radio-field__label'>{label}</p>
            <div className="radio-field__options">
            {options.map(option => (
                <div className='radio-field__option' key={option.value}>
                    <input type="radio" id={String(option.value)} name={name} value={option.value} onChange={handleChange} checked={option.checked}/>
                    <label htmlFor={String(option.value)}>{option.display_value}</label>
                </div>
            ))}
            </div>
        </div>
    )
}
