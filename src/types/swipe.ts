export type TSwipeType = 'left' | 'right' | 'up' | 'bottom'
export type TPages = 'accounts' | 'categories' | 'transactions'
export type TMode = 'edit' | 'create'
export interface ISwipeState {
    visible: boolean,
    type: TSwipeType,
    currentPage: TPages,
    mode: TMode,
}



export enum ESwipeActionTypes {
    SHOW_SWIPE = 'SHOW_SWIPE',
    // SHOW_SWIPE_RIGHT = 'SHOW_SWIPE_RIGHT',
    // SHOW_SWIPE_UP = 'SHOW_SWIPE_UP',
    // SHOW_SWIPE_BOTTOM = 'SHOW_SWIPE_BOTTOM',
    // HIDE_SWIPE_LEFT = 'HIDE_SWIPE_LEFT',
    // HIDE_SWIPE_RIGHT = 'HIDE_SWIPE_RIGHT',
    // HIDE_SWIPE_UP = 'HIDE_SWIPE_UP',
    HIDE_SWIPE = 'HIDE_SWIPE',
}

// interface IShowSwipeAction {
//     type: ESwipeActionTypes.SHOW_SWIPE,
// }
// interface IHideSwipeAction {
//     type: ESwipeActionTypes.HIDE_SWIPE,
// }

export type TSwipeAction = {
    type: ESwipeActionTypes,
    payload: {
        type: TSwipeType,
        currentPage: TPages,
        mode: TMode,
    }
}