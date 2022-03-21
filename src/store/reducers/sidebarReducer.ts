import { ESidebarActionTypes, ISidebarState, TSidebarAction } from "../../types/sidebar";

const initialState: ISidebarState = {
    visible: false,
}

export const sidebarReducer = (state = initialState, action: TSidebarAction): ISidebarState => {
    switch (action.type) {
        case (ESidebarActionTypes.SHOW_SIDEBAR):
            return { visible: true }
        case (ESidebarActionTypes.HIDE_SIDEBAR):
            return { visible: false }
        default:
            return state
    }
}