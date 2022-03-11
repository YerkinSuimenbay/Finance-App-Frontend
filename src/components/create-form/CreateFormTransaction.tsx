import { useActions } from "../../hooks/useActions"
import { ETransactionType } from "../../types/transaction"
import { SubmitFormButton } from "../buttons/submit/SubmitFormButton"
import { InputField } from "../forms/input-field/InputField"
import { RadioField } from "../forms/radio-field/RadioField"
import { SelectFieldFetch } from "../forms/select-field/SelectFieldFetch"
import { TransactionField } from "../forms/transaction-field/TransactionField"


interface CreateFormTransactionProps {
    onChange: (name: string, value: string | number) => void,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
    createForm: any
}

export const CreateFormTransaction: React.FC<CreateFormTransactionProps> = (props) => {
    const { createForm: transaction, onChange, onSubmit } = props
    const { fetchAccounts, fetchCategories } = useActions()
    const { _id, type, amount, account, currency, color, comment, category, createdAt, updatedAt } = transaction

    // const handleSelectChange = (name: string, value: TSelectOption): void => {
    //     setLoginForm(old => {
    //       return {
    //         ...old,
    //         [name]: value
    //       }
    //     })
    //   }
      
    const requestAccounts = async (cb: (res: any) => void) => cb(await fetchAccounts('/accounts'))
    const requestCategories= async (cb: (res: any) => void) => cb(await fetchCategories('/categories'))

    return (
        <form className="form swipe__left__body__form">
            <RadioField label="Transaction Type:" name="type" options={[
                {
                    value: ETransactionType.EXPENSE,
                    display_value: ETransactionType.EXPENSE,
                    checked: type === ETransactionType.EXPENSE
                },
                {
                    value: ETransactionType.INCOME,
                    display_value: ETransactionType.INCOME,
                    checked: type === ETransactionType.INCOME
                },
            ]}
                onChange={onChange}
            />

            <TransactionField type='number' label='Transaction Amount:' name="amount" value={amount} onChange={onChange} currency={currency}/>
            
            <SelectFieldFetch label='Transaction Account' name='account' value={account} fetchOptions={requestAccounts} onChange={onChange}/>
            <SelectFieldFetch label='Transaction Category' name='category' value={category} fetchOptions={requestCategories} onChange={onChange}/>

            <InputField type='date' label='Transaction created at:' name="createdAt" value={createdAt.slice(0, 10)} onChange={onChange}/>

            <InputField type='text' label='Transaction Comment:' name="comment" value={comment} onChange={onChange}/>
            <InputField type='color' label='Transaction Color:' name="color" value={color} onChange={onChange}/>
            <SubmitFormButton onClick={onSubmit}/>
        </form>
    )
}
