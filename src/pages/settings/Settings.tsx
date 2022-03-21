import React, { useEffect, useState } from 'react'
import { CancelFormButton } from '../../components/buttons/cancel/CancelFormButton'
import { SubmitFormButton } from '../../components/buttons/submit/SubmitFormButton'
import { InputField } from '../../components/forms/input-field/InputField'
import { PeriodField } from '../../components/forms/period-field/PeriodField'
import { SelectField } from '../../components/forms/select-field/SelectField'
import { SelectFieldFetch } from '../../components/forms/select-field/SelectFieldFetch'
import { LoaderComponent } from '../../components/loader/Loader'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import './settings.css'

export const Settings: React.FC = () => {
  const { settings, loading, error } = useTypedSelector(state => state.user)
  const { updatePage, fetchAccounts, updateUserSettings } = useActions()

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

  const handleChange = async (name: string, value: string | number) => {
      console.log({ [name]: value });
      // let settings_value = value
      // if (name === 'app_language') {
      //   if (value === 'Қазақ') settings_value = 'kz'
      //   if (value === 'Русский') settings_value = 'ru'
      //   if (value === 'English') settings_value = 'en'
      // }
      updateUserSettings(name, value)
    try {
      
    } catch (error) {
      
    }
  }
  if (loading) return <LoaderComponent text='Saving changes...'/>

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
          <SelectField label='' name='app_language' value={settings.app_language} options={['Қазақ', 'Русский', 'English']} onChange={handleChange}/>
        </div>
        <div className='settings__item'>
          <p>Default account </p>
          <SelectFieldFetch label='' name='default_account' value={settings.default_account} fetchOptions={requestAccounts} onChange={handleChange}/>
        </div>
        <div className='settings__item'>
          <p>Default Period</p>
          <SelectField label='' name='default_period' value={settings.default_period} options={['Day', 'Week', 'Month', 'Year']} onChange={handleChange}/>
        </div>
        <div className='settings__item'>
          <p>Delete all data</p>
          <button className='delete'>Delete all data</button>
        </div>
      </div>
      
    </div>
  )
}
