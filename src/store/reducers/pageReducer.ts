import { EPageActionTypes, IPageState, TPageAction } from "../../types/page";

const initialState: IPageState = {
    currentPage: 'YFinance App',
}

export const pageReducer = (state = initialState, action: TPageAction): IPageState => {
    switch (action.type) {
        case (EPageActionTypes.UPDATE_PAGE):
            return { currentPage: action.payload.currentPage, }
        default:
            return state
    }
}