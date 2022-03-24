import React, { Suspense, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateButton } from '../../components/buttons/create/CreateButton'
import { Category } from '../../components/category/Category'
import { LoaderComponent } from '../../components/loader/Loader'
import { SwitchExpenseIncome } from '../../components/switchExpenseIncome/SwitchExpenseIncome'
import { useActions } from '../../hooks/useActions'
import { useQuery } from '../../hooks/useQuery'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ETransactionType } from '../../types/transaction'
import icons from '../../utils/icons/icons'
import './categories.css'


export const Categories: React.FC = () => {
  const { categories, loading, error } = useTypedSelector(state => state.categories)
  const { account, swipe } = useTypedSelector(state => state)
  const { fetchCategories, showSwipe, createCategory, updatePage, cleanUpCategories } = useActions()

  const navigate = useNavigate()
  const query = useQuery()
  const categoryType = query.get('type') as ETransactionType

  useEffect((): any => {
    updatePage('Categories')

    const URL = `/categories?type=${categoryType}`
    fetchCategories(URL)

    return () => cleanUpCategories()
  }, [categoryType])


  const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    createCategory()
    showSwipe('left', 'categories', 'create')
  }

  const switchType = (newTransactionType: ETransactionType) => {
    let URL = `/categories?type=${newTransactionType}`
    navigate(URL)
  }

  if (loading) return <LoaderComponent text='Loading categories...'/>
  
  if (error) return <h2 className='error-msg'>{error}</h2>

  return (
    <div className='page accounts-page'>
      {/* <header className='page__title'>Categories</header> */}

      <div className='transactions__switch'>
        <SwitchExpenseIncome type={categoryType} onClick={switchType}/>
      </div>
  
      <div className="page__list">
        {categories.length 
        ? categories.map(category => <Category key={category._id} {...category} />) 
        : <div className='no-item'>
            <icons.GENERAL_ICONS.BsSearch className="no-item__top" style={{ width: 50 }} />
            <span className="no-item__bottom">No Category Found</span>
          </div>
        }
      </div>
      
      <CreateButton onClick={onClick} label="category"/>
    </div>

  )
}


