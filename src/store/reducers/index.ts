import { combineReducers } from "redux";
import { authReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
// import { userReducer } from "./usersReducer";
import { feedbackReducer } from "./feedbackReducer";
import { accountsReducer } from "./accountsReducer";
import { swipeReducer } from "./swipeReducer";
import { accountReducer } from "./accountReducer";
import { createFormReducer } from "./createFormReducer";
import { categoriesReducer } from "./categoriesReducer";
import { categoryReducer} from './categoryReducer'
import { transactionsReducer } from "./transactionsReducer";
import { transactionReducer} from './transactionReducer'
import { sidebarReducer} from './sidebarReducer'
import { pageReducer} from './pageReducer'


export const rootReducer = combineReducers({
    // users: userReducer,
    todo: todoReducer,
    user: authReducer,
    feedback: feedbackReducer,
    accounts: accountsReducer,
    swipe: swipeReducer,
    account: accountReducer,
    createForm: createFormReducer,
    categories: categoriesReducer,
    category: categoryReducer,
    transactions: transactionsReducer,
    transaction: transactionReducer,
    sidebar: sidebarReducer,
    page: pageReducer,
})

export type RootState = ReturnType<typeof rootReducer>