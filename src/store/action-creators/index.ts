import * as UsersActionCreators from './users'
import * as TodoActionCreators from './todo'
import * as UserActionCreators from './user'
import * as FeedbackActionCreators from './feedback'
import * as AccountsActionCreators from './accounts'
import * as SwipeActionCreators from './swipe'
import * as AccountActionCreators from './account'
import * as CreateFormActionCreators from './createForm'
import * as CategoriesActionCreators from './categories'
import * as CategoryActionCreators from './category'
import * as TransactionsActionCreators from './transactions'
import * as TransactionActionCreators from './transaction'
import * as SidebarActionCreators from './sidebar'
import * as PageActionCreators from './page'


const actionCreators = {
    ...UsersActionCreators,
    ...TodoActionCreators,
    ...UserActionCreators,
    ...FeedbackActionCreators,
    ...AccountsActionCreators,
    ...SwipeActionCreators,
    ...AccountActionCreators,
    ...CreateFormActionCreators,
    ...CategoriesActionCreators,
    ...CategoryActionCreators,
    ...TransactionsActionCreators,
    ...TransactionActionCreators,
    ...SidebarActionCreators,
    ...PageActionCreators,
}

export default actionCreators