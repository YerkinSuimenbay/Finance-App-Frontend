export type TPages = 'accounts' | 'categories' | 'transactions' | 'home' | 'my profile'

export interface IPageState {
    // currentPage: TPages,
    currentPage: string,
}

export enum EPageActionTypes {
    UPDATE_PAGE = 'UPDATE_PAGE',
}

export type TPageAction = {
    type: EPageActionTypes,
    payload: {
        currentPage: string,
    }
}