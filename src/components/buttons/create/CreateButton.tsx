import React from 'react'
import icons from '../../../utils/icons/icons'
interface ICreateButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string,
}

export const CreateButton: React.FC<ICreateButtonProps> = (props) => {
  const { onClick, label } = props

  return (
    <div className="page__create-btn-container">
    <button className='page__create-btn' onClick={onClick}>
      {<icons.MdOutlineAddBox/>}
      <span>Create new {label}</span> 
    </button>
    </div>
  )
}
