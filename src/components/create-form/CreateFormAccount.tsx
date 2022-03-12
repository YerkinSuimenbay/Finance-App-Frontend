import axios from "axios"
import { useState } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ECurrency, IAccount } from "../../types/account"
import { DeleteButton } from "../buttons/delete/DeleteButton"
import { SubmitFormButton } from "../buttons/submit/SubmitFormButton"
import { InputField, TInputFieldType } from "../forms/input-field/InputField"
import { RadioField } from "../forms/radio-field/RadioField"
import { onChangeFunctionType } from "./CreateForm"


interface CreateFormAccountProps {
    onChange: onChangeFunctionType,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
    createForm: any
}

export const CreateFormAccount: React.FC<CreateFormAccountProps> = (props) => {
    const { createForm: account, onChange, onSubmit } = props
    return (
        <form className="form swipe__left__body__form">
            <InputField type='text' label='Account Name:' name="name" value={account.name} onChange={onChange}/>
            <InputField type='color' label='Account Color:' name="color" value={account.color} onChange={onChange}/>
            <RadioField label="Account Currency:" name="currency" options={[
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
            ]}
                onChange={onChange}
            />
            <InputField type='number' label='Account Total Cash:' name="totalCash" value={account.totalCash} onChange={onChange}/>
            <SubmitFormButton onClick={onSubmit}/>
        </form>
    )
}
