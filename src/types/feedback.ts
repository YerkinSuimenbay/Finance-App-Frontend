export type TFeedbackType = 'success' | 'danger'

export interface IFeedbackState {
    visible: boolean,
    message: string,
    type: TFeedbackType
}

export enum EFeedbackActionTypes {
    SHOW_FEEDBACK = 'SHOW_FEEDBACK',
    HIDE_FEEDBACK = 'HIDE_FEEDBACK',
}

interface IShowFeedbackAction {
    type: EFeedbackActionTypes.SHOW_FEEDBACK,
    payload: {
        message: string,
        type: TFeedbackType
    }
}
interface IHideFeedbackAction {
    type: EFeedbackActionTypes.HIDE_FEEDBACK,
}

export type TFeedbackAction = IShowFeedbackAction | IHideFeedbackAction