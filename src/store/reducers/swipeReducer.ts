import { ESwipeActionTypes, ISwipeState, TSwipeAction } from "../../types/swipe";

const initialState: ISwipeState = {
    visible: false,
    type: 'left',
    currentPage: 'accounts',
    mode: 'create',
}

export const swipeReducer = (state = initialState, action: TSwipeAction): ISwipeState => {
    switch (action.type) {
        case (ESwipeActionTypes.SHOW_SWIPE):
            return { visible: true, type: action.payload.type, currentPage: action.payload.currentPage, mode: action.payload.mode }
        case (ESwipeActionTypes.HIDE_SWIPE):
            return { visible: false, type: action.payload.type, currentPage: action.payload.currentPage, mode: action.payload.mode }
        default:
            return state
    }
}