import React, { useState } from 'react'
import { SelectField, TSelectOption } from '../../components/forms/select-field/SelectField'
import { SelectFieldFetch } from '../../components/forms/select-field/SelectFieldFetch'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import icons from '../../utils/icons/icons'

export const Home: React.FC = () => {
  const store = useTypedSelector(state => state)
  
  return (
    <div className='page home-page'>
      <h2 style={{textAlign: 'center', marginTop: '2rem'}}>
        Hello {store.user.name}
      </h2>

      <div className="icons">
        {Object.keys(icons).map(icon => {
          const Icon = icons[icon]
          return <div className='icon-container' aria-label={icon}>
            <Icon key={icon} className='icon'/>
          </div> 
        })}
      </div>
    </div>
  )
}
