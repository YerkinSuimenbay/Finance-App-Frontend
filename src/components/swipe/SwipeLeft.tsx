import React, { useRef } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { DeleteButton } from '../buttons/delete/DeleteButton'
import { CreateForm } from '../create-form/CreateForm'
// import { CreateForm } from '../create-form/CreateForm'

import './swipe.css'


export const SwipeLeft = () => {
    const swipeRef = useRef<HTMLDivElement>(null)

    const { type, visible, currentPage, mode } = useTypedSelector(state => state.swipe)

    const { hideSwipe, hideFeedback } = useActions()

    const handleSwipeContainerMouseOver: React.MouseEventHandler<HTMLDivElement> = e => {
        const target = e.target as HTMLButtonElement
        if (target.parentElement) {
            target.style.background = 'rgba(0, 0, 0, .4)'
        }
    }
    const handleSwipeMouseOver: React.MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation(); 
        const target = e.target as HTMLButtonElement
        if (target.parentElement) {
            target.parentElement.style.background = ''
        }
    }

    const getSwipeContainerClassName = (): string => {
        let className = 'swipe-container background'
        if (type === 'left' && visible) className += ' show'
        return className
    }
    const getSwipeClassName = (): string => {
        let className = "swipe swipe__left"
        // if (type === 'left' && visible) className += ' show'
        return className
    }

    // useLayoutEffect(() => {
    //     if (swipeRef.current === null) return

    //     const $swipe = swipeRef.current
    //     const hideBackground = () => {
    //         $swipe.style.display = 'none'
    //     }
    //     $swipe.addEventListener('transitionend', hideBackground)
    //     return () => $swipe.removeEventListener('transitionend', hideBackground)
    // })

    const getSwipeLeftTitle = () => {
        switch (currentPage) {
            case ('accounts'):
                return 'Account'
            case ('categories'):
                return 'Category'
            case ('transactions'):
                return 'Transaction'
            default:
                return 'Title'
        }
        // if (currentPage === 'accounts') return 'Account'
        // if (currentPage === 'categories') return 'Category'
    }


    return (
        <div className={getSwipeContainerClassName()} onClick={() => {hideSwipe(type, currentPage, mode); hideFeedback()}} onMouseOver={handleSwipeContainerMouseOver}>
            <div className={getSwipeClassName()} ref={swipeRef} onClick={e => e.stopPropagation()} onMouseOver={handleSwipeMouseOver}>
                <h2 className="swipe__left__title">{getSwipeLeftTitle()}</h2>
                <div className='swipe__left__body'>
                    <CreateForm currentPage={currentPage} mode={mode}/>
                </div>
            </div>
        </div>
    )
}
