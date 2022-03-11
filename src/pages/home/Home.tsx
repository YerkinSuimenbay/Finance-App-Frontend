import React, { useState } from 'react'
import { SelectField, TSelectOption } from '../../components/forms/select-field/SelectField'
import { SelectFieldFetch } from '../../components/forms/select-field/SelectFieldFetch'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Home: React.FC = () => {
  const store = useTypedSelector(state => state)
  
  return (
    <div className='page home-page'>
      <h2 style={{textAlign: 'center', marginTop: '2rem'}}>
        Hello {store.user.name}
      </h2>

    </div>
  )
}
