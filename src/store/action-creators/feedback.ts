import { EFeedbackActionTypes, TFeedbackAction, TFeedbackType } from "../../types/feedback"

export const showFeedback = (type: TFeedbackType, message: string): TFeedbackAction => {
    return { type: EFeedbackActionTypes.SHOW_FEEDBACK, payload: { message, type } }
}
export const hideFeedback = (): TFeedbackAction => {
    console.log('hide f');
    
    return { type: EFeedbackActionTypes.HIDE_FEEDBACK }
}