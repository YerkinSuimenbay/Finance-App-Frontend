import React,  { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useGlobalContext } from '../../../store/context/context'
import './feedback_2.css'

const Feedback2 = () => {
    const {showFeedback2, setShowFeedback2, feedbackInfo2: { type, message }} = useGlobalContext()
    const history = useHistory()
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setShowFeedback(false)
    //     }, 5000)   // HIDE FEEDBACK AFTER 5 seconds
    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // })

    const handleCLick = () => {
        setShowFeedback2(false)
        history.goBack()
    }

    return (
        <div className={showFeedback2 ? `feedback show ${type}` : 'feedback'}>
            {message}
            <button className="feedback__btn" onClick={handleCLick}>Go back</button>
        </div>
    )
}

export default Feedback2
