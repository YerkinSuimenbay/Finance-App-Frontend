import { TInputType } from "../components/forms/input-field/InputField"
import { IRadioGroupOption } from "../components/forms/radio-field/RadioField"


export interface CreateFormItem {
    type: TInputType,
    label: string,
    value?: string | number,
    options?: IRadioGroupOption[]
}

export type TCreateFormAccount = Record<'name' | 'color' | 'currency' | 'totalCash', CreateFormItem>
type TCreateFormCategory = Record<'name' | 'color' | 'currency' | 'totalCash' | 'testetsetsts', CreateFormItem>
type TCreateFormGeneral = Record<string, CreateFormItem>

// export type ICreateFormState = TCreateFormAccount | TCreateFormCategory 
export type ICreateFormState = 
    TCreateFormAccount 
    | TCreateFormCategory 
    | TCreateFormGeneral


export enum ECreateFormActionTypes {
    SET_FORM_ACCOUNT = 'SET_FORM_ACCOUNT',
    SET_FORM_CATEGORY = 'SET_FORM_CATEGORY',
}

export interface ICreateFormAccountAction {
    type: ECreateFormActionTypes.SET_FORM_ACCOUNT,
    payload: TCreateFormAccount
}
export interface ICreateFormAccountCategory {
    type: ECreateFormActionTypes.SET_FORM_CATEGORY,
    payload: TCreateFormCategory
}

export type TCreateFormAction = ICreateFormAccountAction | ICreateFormAccountCategory