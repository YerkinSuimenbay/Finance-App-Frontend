import { EFeedbackActionTypes, IFeedbackState, TFeedbackAction } from "../../types/feedback";

const initialState: IFeedbackState = {
    visible: false,
    message: 'Default Feedback Message',
    type: 'success'
}

export const feedbackReducer = (state = initialState, action: TFeedbackAction): IFeedbackState => {
    switch (action.type) {
        case (EFeedbackActionTypes.SHOW_FEEDBACK):
            return { visible: true, message: action.payload.message, type: action.payload.type }
        case (EFeedbackActionTypes.HIDE_FEEDBACK):
            return { visible: false, message: '', type: 'success' }
        default:
            return state
    }
}