import { EPageActionTypes, IPageState, TPageAction } from "../../types/page";

const initialState: IPageState = {
    currentPage: 'home',
}

export const pageReducer = (state = initialState, action: TPageAction): IPageState => {
    switch (action.type) {
        case (EPageActionTypes.UPDATE_PAGE):
            return { currentPage: action.payload.currentPage, }
        default:
            return state
    }
}