import axios from 'axios'
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
  const { updatePage, fetchAccounts, updateUserSettings, showFeedback } = useActions()

  const [passwordFields, setPasswordFields] = useState({
    loading: false,
    visible: false,
    oldPwd: '',
    newPwd: '',
    repeatPwd: ''
  })

  const [deletingAllData, setDeletingAllData] = useState(false)

  useEffect(() => {
    updatePage('Settings')
  }, [])


  const togglePasswordForm = () => {
    setPasswordFields(oldValue => ({ ...oldValue, visible: !oldValue.visible }))
    // setPasswordFieldsVisible(oldValue => !oldValue)
  }

  const changePasswordFields = (name: string, value: string | number) => {
    setPasswordFields(oldValue => ({ ...oldValue, [name]: value }))
  }

  const submitPasswordChange: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()
    const { oldPwd, newPwd, repeatPwd } = passwordFields
    if (!oldPwd || !newPwd || !repeatPwd) return showFeedback('danger', 'Please feel all neseccary fields to change password')
    
    try {
      setPasswordFields(oldValue => ({ ...oldValue, loading: true }))

      await axios.patch('user/password', { oldPwd, newPwd, repeatPwd })

      showFeedback('success', 'Password has been changed successfully')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showFeedback('danger', error.response?.data.msg || 'Server Error')
      } else if (error instanceof Error) {
        showFeedback('danger', error.message)
      }
    } finally {
      setPasswordFields(oldValue => ({ ...oldValue, loading: false }))
    }
  }
  const cancelPasswordChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setPasswordFields(oldValue => ({ ...oldValue, visible: false }))
    // setPasswordFieldsVisible(false)
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



  const deleteAllData = async () => {
    try {
      setDeletingAllData(true)
      await axios.delete('user/deleteAllData')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showFeedback('danger', error.response?.data.msg || 'Server Error')
      } else if (error instanceof Error) {
        showFeedback('danger', error.message)
      }
    } finally {
      setDeletingAllData(false)
    }
  }

  if (loading || passwordFields.loading || deletingAllData) return <LoaderComponent text='Saving changes...'/>

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
        
        {passwordFields.visible && <form className='settings__change-pwd-form form'>
          <InputField type='password' label='Old pwd' name='oldPwd' value={passwordFields.oldPwd} onChange={changePasswordFields} />
          <InputField type='password' label='New pwd' name='newPwd' value={passwordFields.newPwd} onChange={changePasswordFields} />
          <InputField type='password' label='Repeat pwd' name='repeatPwd' value={passwordFields.repeatPwd} onChange={changePasswordFields} />
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
          <button className='delete' onClick={deleteAllData}>Delete all data</button>
        </div>
      </div>
      
    </div>
  )
}
