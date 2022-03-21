import React, { useEffect, useState } from 'react'
import { CancelFormButton } from '../../components/buttons/cancel/CancelFormButton'
import { SubmitFormButton } from '../../components/buttons/submit/SubmitFormButton'
import { InputField } from '../../components/forms/input-field/InputField'
import { PeriodField } from '../../components/forms/period-field/PeriodField'
import { SelectField } from '../../components/forms/select-field/SelectField'
import { SelectFieldFetch } from '../../components/forms/select-field/SelectFieldFetch'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import './settings.css'

export const Settings: React.FC = () => {
  const store = useTypedSelector(state => state)
  const { updatePage, fetchAccounts } = useActions()

  const [passwordFieldsVisible, setPasswordFieldsVisible] = useState(false)

  useEffect(() => {
    updatePage('Settings')
  }, [])


  const togglePasswordForm = () => {
    setPasswordFieldsVisible(oldValue => !oldValue)
  }

  const submitPasswordChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
  }
  const cancelPasswordChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setPasswordFieldsVisible(false)
  }

  const requestAccounts = async (cb: (res: any) => void) => cb(await fetchAccounts('/accounts'))


  return (
    <div className='page settings-page'>
      {/* <h2 style={{textAlign: 'center', marginTop: '2rem'}}>
        Settings
      </h2> */}

      <div className='settings__container'>
        <div className='settings__item'>
          <p className=''>Password</p>
          <button className='change' onClick={togglePasswordForm}>Change password</button>
        </div>
        
        {passwordFieldsVisible && <form className='settings__change-pwd-form form'>
          <InputField type='password' label='Old pwd' name='pwd' value={''} onChange={() => {}} />
          <InputField type='password' label='New pwd' name='pwd' value={''} onChange={() => {}} />
          <InputField type='password' label='Repeat pwd' name='pwd' value={''} onChange={() => {}} />
          <SubmitFormButton label='Change password' onClick={submitPasswordChange}/>
          <CancelFormButton label='Cancel' onClick={cancelPasswordChange}/>
        </form>}


        <div className='settings__item'>
          <p>App language</p>
          <SelectField label='' name='language' value='English' options={['Қазақ', 'Русский', 'English']} onChange={() => {}}/>
        </div>
        <div className='settings__item'>
          <p>Default account </p>
          <SelectFieldFetch label='' name='account' value='kaspi' fetchOptions={requestAccounts} onChange={() => {}}/>
        </div>
        <div className='settings__item'>
          <p>Default Period</p>
          <SelectField label='' name='period' value='Day' options={['Day', 'Week', 'Month', 'Year']} onChange={() => {}}/>
        </div>
        <div className='settings__item'>
          <p>Delete all data</p>
          <button className='delete'>Delete all data</button>
        </div>
      </div>
      
    </div>
  )
}
