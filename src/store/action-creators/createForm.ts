// import { EFeedbackActionTypes, TFeedbackAction, TFeedbackType } from "../../types/feedback"

import { ECurrency, IAccount } from "../../types/account";
import { ECreateFormActionTypes, ICreateFormAccountAction } from "../../types/createForm";

export const setFormAccount = (account: IAccount): ICreateFormAccountAction  => {
    return { 
        type: ECreateFormActionTypes.SET_FORM_ACCOUNT, 
        payload: {
            name: {
                type: 'text',
                label: 'Account Name:',
                value: account.name,
            },
            color: {
                type: 'color',
                label: 'Account Color:',
                value: account.color,
            },
            currency: {
                type: 'radio',
                label: 'Account Currency:',
                options: [
                    {
                        value: ECurrency.KZT,
                        display_value: ECurrency.KZT,
                        checked: account.currency === ECurrency.KZT
                    },
                    {
                        value: ECurrency.RUB,
                        display_value: ECurrency.RUB,
                        checked: account.currency === ECurrency.RUB
                    },
                    {
                        value: ECurrency.USD,
                        display_value: ECurrency.USD,
                        checked: account.currency === ECurrency.USD
                    },
                ]
            },
            totalCash: {
                type: 'number',
                label: 'Account Total Cash:',
                value: account.totalCash,
            },
        } 
    }
}
// export const hideFeedback = (): TFeedbackAction => {
//     console.log('hide f');
    
//     return { type: EFeedbackActionTypes.HIDE_FEEDBACK }
// }