import React from 'react'
import './cancel-form-button.css'

interface ICancelForm {
    onClick: (event:React.MouseEvent<HTMLButtonElement>) => void;
    label?: string
}


export const CancelFormButton: React.FC<ICancelForm> = (props) => {
    const { onClick, label="Cancel" } = props
    return (  
        <button 
            className='form-btn cancel-form-btn'
            onClick={onClick}    
        >
            {label}
        </button>
    )
}
