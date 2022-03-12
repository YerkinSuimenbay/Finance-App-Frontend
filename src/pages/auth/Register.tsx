import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SubmitFormButton } from '../../components/buttons/submit/SubmitFormButton'
import { onChangeFunctionType } from '../../components/create-form/CreateForm'
import { InputField } from '../../components/forms/input-field/InputField'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './auth.css'

interface ILoginForm {
  name: string,
  email: string,
  password: string
}

const URL = '/auth/register'


export const Register: React.FC = () => {
  const { showFeedback, authUser } = useActions()
  const { loading } = useTypedSelector(state => state.user)

  const [registerForm, setRegisterForm] = useState<ILoginForm>({
    name: '',
    email: '',
    password: ''
  })

  const handleChange: onChangeFunctionType = (name, value) => {
    setRegisterForm(old => {
      return {
        ...old,
        [name]: value
      }
    })
  }

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()

    if (loading) return

    const error = await authUser(URL, registerForm)
  
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
        <h3 className="auth__container__title">Register</h3>
        <form className="form auth__container__form">
          <InputField type="text" name="name" value={registerForm.name} label='Name:' onChange={handleChange}/>
          <InputField type="email" name="email" value={registerForm.email} label='Email:' onChange={handleChange}/>
          <InputField type="password" name="password" value={registerForm.password} label='Password:' onChange={handleChange}/>
         
          {/* <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday" /> */}

          <SubmitFormButton onClick={handleSubmit}/>
        </form>

        <p className='auth__container__redirect'>Do have account? <Link to='/auth/login'>Login</Link></p>
      </div>
    </div>
  )
}
