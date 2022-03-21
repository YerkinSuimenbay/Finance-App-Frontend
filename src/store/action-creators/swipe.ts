import { TPages } from "../../types/page";
import { ESwipeActionTypes, TMode, TSwipeAction, TSwipeType } from "../../types/swipe"

export const showSwipe = (type: TSwipeType, currentPage: TPages, mode: TMode): TSwipeAction => {
    return { type: ESwipeActionTypes.SHOW_SWIPE, payload: {
        type,
        currentPage,
        mode
    } }
}
export const hideSwipe = (type: TSwipeType, currentPage: TPages, mode: TMode): TSwipeAction => {
    console.log(type, currentPage);
    
    return { type: ESwipeActionTypes.HIDE_SWIPE, payload: {
        type,
        currentPage,
        mode,
    } }
}