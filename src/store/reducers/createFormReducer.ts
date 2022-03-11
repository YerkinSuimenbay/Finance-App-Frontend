import { ECurrency } from "../../types/account"
import { ECreateFormActionTypes, TCreateFormAccount, ICreateFormState, TCreateFormAction } from "../../types/createForm"

const initialState: ICreateFormState = {
    // name: {
    //     type: 'text',
    //     label: 'Account Name:',
    //     value: '',
    //   },
    //   color: {
    //     type: 'color',
    //     label: 'Account Color:',
    //     value: '#3f3f3f',
    //   },
    //   currency: {
    //     type: 'radio',
    //     label: 'Account Currency:',
    //     // value: account.account.currency,
    //     options: [
    //       {
    //         value: ECurrency.KZT,
    //         display_value: ECurrency.KZT,
    //         defaultChecked: true
    //     },
    //     {
    //         value: ECurrency.RUB,
    //         display_value: ECurrency.RUB,
    //         defaultChecked: false
    //     },
    //     {
    //         value: ECurrency.USD,
    //         display_value: ECurrency.USD,
    //         defaultChecked: false
    //     },
    //     ]
    //   },
    //   totalCash: {
    //     type: 'number',
    //     label: 'Account Total Cash:',
    //     value: 0,
    //   },
}

export const createFormReducer = (state = initialState, action: TCreateFormAction): ICreateFormState => {
    switch (action.type) {
        case (ECreateFormActionTypes.SET_FORM_ACCOUNT):
            return { ...action.payload }
        case (ECreateFormActionTypes.SET_FORM_CATEGORY):
            return { ...action.payload}
        default:
            return state
    }
}