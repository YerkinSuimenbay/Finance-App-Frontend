import React,  { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// import { useGlobalContext } from '../../../store/context/context'
import './feedback.css'

export const Feedback: React.FC = () => {
    // const {showFeedback, setShowFeedback, feedbackInfo: { type, message }} = useGlobalContext() 
    const { hideFeedback } = useActions()
    const feedback = useTypedSelector(state => state.feedback)
    useEffect(() => {
        if (!feedback.visible) return

        const timeout = setTimeout(() => {     
            hideFeedback()
        }, 4000)   // HIDE FEEDBACK AFTER 5 seconds
        return () => {
            clearTimeout(timeout)
        }
    }, [feedback, hideFeedback])

    return (
        <div className={feedback.visible ? `feedback show ${feedback.type}` : 'feedback'}>
            {feedback.message}
        </div>
    )
}

