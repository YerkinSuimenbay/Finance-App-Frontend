import { useEffect } from "react"
import { useActions } from "../../hooks/useActions"
import { useQuery } from "../../hooks/useQuery"
import { ETransactionType } from "../../types/transaction"
import { SubmitFormButton } from "../buttons/submit/SubmitFormButton"
import { InputField } from "../forms/input-field/InputField"
import { RadioField } from "../forms/radio-field/RadioField"
import { SelectFieldFetch } from "../forms/select-field/SelectFieldFetch"
import { TransactionField } from "../forms/transaction-field/TransactionField"
import { onChangeFunctionType } from "./CreateForm"


interface CreateFormTransactionProps {
    onChange: onChangeFunctionType,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
    createForm: any
}

export const CreateFormTransaction: React.FC<CreateFormTransactionProps> = (props) => {
    const { createForm: transaction, onChange, onSubmit } = props
    const { fetchAccounts, fetchCategories } = useActions()
    
    const typeQuery = useQuery().get('type')

    const { _id, type, amount, account, currency, color, comment, category, createdAt, updatedAt } = transaction

    useEffect(() => {
        if (type) return
        onChange('type', typeQuery as string)
    }, [type, typeQuery, onChange])
    

    const requestAccounts = async (cb: (res: any) => void) => cb(await fetchAccounts('/accounts'))
    const requestCategories= async (cb: (res: any) => void) => cb(await fetchCategories(`/categories?type=${type}`))


    const handleRadioFieldChange: onChangeFunctionType = (name, value) => {
        onChange(name, value)
        onChange('category', '')
    }

    return (
        <form className="form swipe__left__body__form">
            <RadioField label="Type:" name="type" options={[
                {
                    value: ETransactionType.EXPENSE,
                    display_value: ETransactionType.EXPENSE,
                    checked: type === ETransactionType.EXPENSE,
                },
                {
                    value: ETransactionType.INCOME,
                    display_value: ETransactionType.INCOME,
                    checked: type === ETransactionType.INCOME,
                },
            ]}
                onChange={handleRadioFieldChange}
            />

            <TransactionField type='number' label='Amount:' name="amount" value={amount} onChange={onChange} currency={currency}/>
            
            <SelectFieldFetch label='Account' name='account' value={account} fetchOptions={requestAccounts} onChange={onChange}/>
            <SelectFieldFetch label='Category' name='category' value={category} fetchOptions={requestCategories} onChange={onChange}/>

            <InputField type='date' label='Created at:' name="createdAt" value={createdAt.slice(0, 10)} onChange={onChange}/>

            <InputField type='text' label='Comment:' name="comment" value={comment} onChange={onChange}/>
            {/* <InputField type='color' label='Transaction Color:' name="color" value={color} onChange={onChange}/> */}
            <SubmitFormButton onClick={onSubmit}/>
        </form>
    )
}
