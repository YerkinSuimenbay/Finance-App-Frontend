export interface ISidebarState {
    visible: boolean,
}

export enum ESidebarActionTypes {
    SHOW_SIDEBAR = 'SHOW_SIDEBAR',
    HIDE_SIDEBAR = 'HIDE_SIDEBAR',
}

export type TSidebarAction = {
    type: ESidebarActionTypes,
}