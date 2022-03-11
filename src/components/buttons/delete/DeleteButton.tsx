import React from 'react'
import './delete-button.css'

interface IDeleteButtonProps {
    onClick: (event:React.MouseEvent<HTMLButtonElement>) => void;
}


export const DeleteButton: React.FC<IDeleteButtonProps> = (props) => {
    const { onClick } = props
    return (  
        <button 
            className='delete-btn'
            onClick={onClick}    
        >
            Delete
        </button>
    )
}
