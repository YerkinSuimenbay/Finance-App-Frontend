import React, { useEffect } from 'react'
import { CreateButton } from '../../components/buttons/create/CreateButton'
import { Category } from '../../components/category/Category'
import { LoaderComponent } from '../../components/loader/Loader'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './categories.css'

const URL = '/categories'

export const Categories: React.FC = () => {
  const { categories, loading, error } = useTypedSelector(state => state.categories)
  const { account, swipe } = useTypedSelector(state => state)
  const { fetchCategories, showSwipe, createCategory, updatePage } = useActions()

  useEffect(() => {
    updatePage('Categories')
    fetchCategories(URL)
  }, [])


  const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    createCategory()
    showSwipe('left', 'categories', 'create')
  }

  if (loading) {
    return <LoaderComponent text='Loading categories...'/>

  }
  
  if (error) {
    return <h2 className='error-msg'>{error}</h2>
  }

  return (
    <div className='page accounts-page'>
      {/* <header className='page__title'>Categories</header> */}
  
      <div className="page__list">
        {categories.map(category => <Category key={category._id} {...category} />)}
      </div>
      
      <CreateButton onClick={onClick} label="category"/>
    </div>
  )
}


