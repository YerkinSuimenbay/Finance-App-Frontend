import { EPageActionTypes, TPageAction } from "../../types/page";

export const updatePage = (currentPage: string): TPageAction => {
    return { type: EPageActionTypes.UPDATE_PAGE, payload: {
        currentPage,
    } }
}
