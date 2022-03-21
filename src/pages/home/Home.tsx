import React, { useEffect, useState } from 'react'
import { PeriodField } from '../../components/forms/period-field/PeriodField'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Home: React.FC = () => {
  const store = useTypedSelector(state => state)
  const { updatePage } = useActions()

  useEffect(() => {
    updatePage('YFinance App')
  }, [])

  return (
    <div className='page home-page'>
      <h2 style={{textAlign: 'center', marginTop: '2rem'}}>
        Hello {store.user.name}
      </h2>
      
    </div>
  )
}
