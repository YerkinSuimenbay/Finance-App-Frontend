import { EUsersActionTypes, TUsersAction, IUsersState } from "../../types/users"

const initialState: IUsersState  = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: TUsersAction): IUsersState => {
    switch (action.type) {
        case EUsersActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] }
        case EUsersActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload }
        case EUsersActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [ ]}
        default:
            return state
    } 
}