import React from 'react'
import './submit-form-button.css'

interface ISubmitForm {
    onClick: (event:React.MouseEvent<HTMLButtonElement>) => void;
}


export const SubmitFormButton: React.FC<ISubmitForm> = (props) => {
    const { onClick } = props
    return (  
        <button 
            className='submit-btn submit-form-btn'
            onClick={onClick}    
        >
            Submit
        </button>
    )
}
