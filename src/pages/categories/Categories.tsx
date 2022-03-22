import React, { Suspense, useEffect } from 'react'
import { CreateButton } from '../../components/buttons/create/CreateButton'
import { Category } from '../../components/category/Category'
import { LoaderComponent } from '../../components/loader/Loader'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import icons from '../../utils/icons/icons'
import './categories.css'

const URL = '/categories'

export const Categories: React.FC = () => {
  const { categories, loading, error } = useTypedSelector(state => state.categories)
  const { account, swipe } = useTypedSelector(state => state)
  const { fetchCategories, showSwipe, createCategory, updatePage, cleanUpCategories } = useActions()

  useEffect((): any => {
    updatePage('Categories')
    fetchCategories(URL)

    return () => cleanUpCategories()
  }, [])


  const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    createCategory()
    showSwipe('left', 'categories', 'create')
  }

  if (loading) return <LoaderComponent text='Loading categories...'/>
  
  if (error) return <h2 className='error-msg'>{error}</h2>

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
    <div className='page accounts-page'>
      {/* <header className='page__title'>Categories</header> */}
  
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
    </Suspense>

  )
}


