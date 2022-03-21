import { TPages } from "../../types/page";
import { ESidebarActionTypes, TSidebarAction } from "../../types/sidebar";

export const showSidebar = (): TSidebarAction => {
    return { type: ESidebarActionTypes.SHOW_SIDEBAR }
}
export const hideSidebar = (): TSidebarAction => {
    return { type: ESidebarActionTypes.HIDE_SIDEBAR }
}