import React from 'react'
import './submit-form-button.css'

interface ISubmitForm {
    onClick: (event:React.MouseEvent<HTMLButtonElement>) => void;
    label?: string
}


export const SubmitFormButton: React.FC<ISubmitForm> = (props) => {
    const { onClick, label="Submit" } = props
    return (  
        <button 
            className='form-btn submit-form-btn'
            onClick={onClick}    
        >
            {label}
        </button>
    )
}
