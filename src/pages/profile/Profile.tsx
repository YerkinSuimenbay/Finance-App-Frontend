import axios from 'axios'
import React, {  } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './profile.css'

export const Profile: React.FC = () => {
  const store = useTypedSelector(state => state)
  const { showFeedback, logoutUser } = useActions()

  const deleteAccount: React.MouseEventHandler<HTMLButtonElement> = async () => {
    console.log('delete account');

    try {
      const res = await axios.delete('/auth/delete')
      const username = res.data.user.name
      const email = res.data.user.email

      localStorage.removeItem('financeAppToken')
      localStorage.removeItem('financeAppUserInfo')

      showFeedback('success', `Account with username ${username} and email ${email} deleted`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showFeedback('danger', error.response?.data.msg || 'Server Error')
      } else if (error instanceof Error) {
        console.log('Error error', error.message) // works, `e` narrowed to Error
        showFeedback('danger', error.message)
      }   
    }
  }
  const logout: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('logout');
    
    localStorage.removeItem('financeAppToken')
    localStorage.removeItem('financeAppUserInfo')
    logoutUser()
  }

  let name: string = 'No name', email: string = 'No email'
  if (localStorage.getItem('financeAppUserInfo')) {
    const userInfoStringified = localStorage.getItem('financeAppUserInfo')
    if (typeof userInfoStringified === 'string') {
      const userInfo = JSON.parse(userInfoStringified)
      name = userInfo.name
      email = userInfo.email
    } else {
      name = store.user.name
      email = store.user.email
    }
  }
  
  return (
    <div className='page profile-page'>

      <div className="profile">
        <div className='profile__img-container'>
          IMAGE
          {/* <img src="/Users/yerkinsuimenbay/Desktop/web/BE/deployed-projects/01-finance-app/frontend/src/utils/images/profile.png" alt="profile avatar" /> */}
        </div>
        <div className='profile__item'>
          <p className='profile__item__key'>Name:</p>
          <p className='profile__item__value'>{name}</p>
        </div>
        <div className='profile__item'>
          <p className='profile__item__key'>Email:</p>
          {/* <p className='profile__item__value'>{store.user.email}</p> */}
          <p className='profile__item__value'>{email}</p>
        </div>
        <div className='profile__btns'>
          <button onClick={logout}>Log out</button>
          <button onClick={deleteAccount}>Delete account</button>
        </div>
      </div>


    </div>
  )
}
