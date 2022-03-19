import React from "react"
import './category.css'
import icons from '../../utils/icons/icons'
import { ECategoryType, ICategory } from "../../types/category"
import { useActions } from "../../hooks/useActions"

interface ICategoryProps extends ICategory {
    // onClick: (id: string) => void;
}

  
export const Category: React.FC<ICategoryProps> = (props) => {
    const { color, _id, name, type, icon } = props

    const { fetchCategory, showSwipe } = useActions()
    const handleCategoryClick = async (categoryId: string) => {
        console.log(categoryId);
        const acc = await fetchCategory(`/categories/${categoryId}`)
        // console.log(account,swipe);
        console.log(acc);
    
        // setFormCategory(acc as unknown as ICategory)
        showSwipe('left', 'categories', 'edit')
    }

    let Icon = icon ? icons.CATEGORY_ICONS[icon]  : icons.CATEGORY_ICONS.AiOutlineBank
    return (
        <div className='list-item' onClick={() => handleCategoryClick(_id)}>
            <div className="list-item__left" style={{ background: color }}>
                <Icon />
            </div>
            <div className="list-item__middle">{name}</div>
            <div className="list-item__right" style={{color: type === ECategoryType.EXPENSE ? 'red' : 'green'}}>{type}</div>
        </div>
    )
}