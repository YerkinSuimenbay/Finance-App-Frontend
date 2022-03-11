import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SubmitFormButton } from '../../components/buttons/submit/SubmitFormButton'
import { InputField } from '../../components/forms/input-field/InputField'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './auth.css'

interface ILoginForm {
  email: string,
  password: string
}

const URL = '/auth/login'

export const Login: React.FC = () => {
  const { showFeedback, authUser } = useActions()
  const { loading } = useTypedSelector(state => state.user)

  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: '',
    password: ''
  })

  const handleChange = (name: string, value: string | number) => {
    setLoginForm(old => {
      return {
        ...old,
        [name]: value
      }
    })
  }

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()

    if (loading) return

    const error = await authUser(URL, loginForm)
  
    if (axios.isAxiosError(error)) {
      showFeedback('danger', error.response?.data.msg || 'Server Error')
    } else if (error instanceof Error) {
        console.log('Error error', error.message) // works, `e` narrowed to Error
        showFeedback('success', error.message)
    }
  }

  return (
    <div className='auth'>
      
      <div className="auth__container">
        <header className="auth__container__header">Finance App</header>
        <h3 className="auth__container__title">Login</h3>
        <form className="form auth__container__form">
          <InputField type="email" name="email" value={loginForm.email} label='Email:' onChange={handleChange}/>
          <InputField type="password" name="password" value={loginForm.password} label='Password:' onChange={handleChange}/>
         
          {/* <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday" /> */}

          <SubmitFormButton onClick={handleSubmit}/>
        </form>

        <p className='auth__container__redirect'>Does not have account? <Link to='/auth/register'>Register</Link></p>
      </div>
    </div>
  )
}
