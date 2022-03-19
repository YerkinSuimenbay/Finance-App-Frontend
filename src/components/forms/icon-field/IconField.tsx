import React, { useState } from 'react'
import icons from '../../../utils/icons/icons'
import './icon-field.css'

type IconTypes =  'CATEGORY_ICONS' | 'ACCOUNT_ICONS' | 'GENERAL_ICONS'
interface IconFieldProps {
  color: string,
  label: string,
  onChange: (name: string, value: string | number) => void,
  name: string,
  value: string,
  type: IconTypes
}

export const IconField: React.FC<IconFieldProps> = (props) => {
  const { color, label, name, onChange, value, type } = props

  const handleClick = (icon: string) => {
    return (event: React.MouseEvent<HTMLDivElement>) => {
      onChange(name, icon)
    }
  }
  return (<div className='icon-field'>
    <p className='icon-field__label'>{label}</p>
    <div className="icons">
        {Object.keys(icons[type]).map(icon => {
          const Icon = icons[type][icon]
          return (
            <div 
            className={value === icon ? 'icon-container active'  : 'icon-container'} 
            aria-label={icon} 
            onClick={handleClick(icon)}
            style={{ background: value === icon ? color : '' }}
            >
              <Icon key={icon} className='icon'/>
            </div> )
        })}
      </div>
  </div>
  )
}
