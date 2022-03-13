import moment from 'moment'
import React, { useRef, useState } from 'react'
import { useActions } from '../../../hooks/useActions'
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
  onChange: (newPeriod: TPeriod, fromDate?: string, toDate?: string)  => void,
  from: string | null,
  to: string | null,
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
  const { value, onChange, from, to } = props

  const { showFeedback } = useActions()

  const [visible, setVisible] = useState(value === 'period')
 
  const [fromDate, setFromDate] = useState(from || '')
  const [toDate, setToDate] = useState(to || '')


  const handleClick = (newPeriod: TPeriod) => {
    return (event: React.MouseEvent<HTMLLIElement>) => {
      if (newPeriod === 'period') {
        setVisible(true)
        return
      }

      setVisible(false)
      onChange(newPeriod)
    }
  }


  return (<>
    <ul className='period-field'>
      {Object.entries(PERIODS).map((period) => {
        return <li className={period[0] === value ? 'period active' : 'period'} onClick={handleClick(period[0] as TPeriod)}>{period[1]}</li>
      })}
      </ul>

      {visible && 
      <div className="period-field__date-fields">
        <input type="date" name="from" value={fromDate} onChange={e => {
            setFromDate(e.target.value); 
            if (moment(e.target.value).isAfter(moment(toDate))) setToDate('')
          }}/>
        {fromDate 
          ? <input type="date" name="to" value={toDate} onChange={e => setToDate(e.target.value)} min={fromDate} />
          : <input type="date" name="to" value={toDate} onChange={e => setToDate(e.target.value)} min={fromDate} disabled />
        }

        <button 
          onClick={() => {
            if (!fromDate || !toDate) return showFeedback('danger', 'Please, fill both dates!')
            onChange('period', fromDate, toDate)
          }}
        >
          Submit
        </button>

      </div>
      }
  </>)
}
