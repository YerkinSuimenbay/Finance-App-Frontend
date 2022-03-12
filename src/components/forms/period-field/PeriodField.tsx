import React, { useRef, useState } from 'react'
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
  onChange: (newPeriod: TPeriod, fromDate?: string, toDate?: string)  => void
}

const PERIODS: Record<TPeriod, string> = {
  day: 'Day',
  week: 'Week',
  month: 'Month',
  year: 'Year',
  period: 'Period',
}
// export default PERIODS

export const PeriodField: React.FC<PeriodFieldProps> = (props) => {
  // const { color, label, name, onChange, value } = props
  const { value, onChange } = props

  const [visible, setVisible] = useState(false)
  // const fromDateRef = useRef<HTMLInputElement>(null)
  // const toDateRef = useRef<HTMLInputElement>(null)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')


  const handleClick = (newPeriod: TPeriod) => {
    return (event: React.MouseEvent<HTMLLIElement>) => {
      if (newPeriod === 'period') {
        setVisible(true)
        return
      }
      onChange(newPeriod)
    }
  }


  return (
    <ul className='period-field'>
      {Object.entries(PERIODS).map((period) => {
      return <li className={period[0] === value ? 'period active' : 'period'} onClick={handleClick(period[0] as TPeriod)}>{period[1]}</li>
      })}
      
      {visible && <div className="period-field__date-fields">
        {/* <input type="date" name="from" ref={fromDateRef}/>
        <input type="date" name="to" ref={toDateRef}/> */}
        <input type="date" name="from" value={fromDate} onChange={e => setFromDate(e.target.value)}/>
        <input type="date" name="to" value={toDate} onChange={e => setToDate(e.target.value)} min={fromDate}/>
        <button onClick={() => {
          if (!fromDate || !toDate) return
          onChange('period', fromDate, toDate)
        }}>Submit</button>
      </div>}
      </ul>
  )
}
