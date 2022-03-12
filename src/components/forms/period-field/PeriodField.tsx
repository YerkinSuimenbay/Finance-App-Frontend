import React, { useState } from 'react'
import icons from '../../../utils/icons/icons'
import './period-field.css'

export type TPeriod = 'day' | 'week' | 'month' | 'year' | 'period'

interface PeriodFieldProps {
  // color: string,
  // label: string,
  // onChange: (name: string, value: string | number) => void,
  // name: string,
  // value: string,
  value: TPeriod,
  onChange: (newPeriod: TPeriod) => void
}

const periods: Record<TPeriod, string> = {
  day: 'Day',
  week: 'Week',
  month: 'Month',
  year: 'Year',
  period: 'Period',
}


export const PeriodField: React.FC<PeriodFieldProps> = (props) => {
  // const { color, label, name, onChange, value } = props
  const { value, onChange } = props

  const handleClick = (newPeriod: TPeriod) => {
    return (event: React.MouseEvent<HTMLLIElement>) => {
      if (newPeriod === 'period') {
        return
      }
      onChange(newPeriod)
    }
  }


  return (
    <ul className='period-field'>
      {Object.entries(periods).map((period) => {
      return <li className={period[0] === value ? 'period active' : 'period'} onClick={handleClick(period[0] as TPeriod)}>{period[1]}</li>
      })}
        {/* <li className='period'>Week</li>
        <li className='period'>Month</li>
        <li className='period'>Year</li>
        <li className='period'>Period</li> */}
      </ul>
  )
}
