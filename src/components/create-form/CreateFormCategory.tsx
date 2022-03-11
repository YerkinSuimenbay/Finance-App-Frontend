import { ECategoryType } from "../../types/category"
import { SubmitFormButton } from "../buttons/submit/SubmitFormButton"
import { InputField } from "../forms/input-field/InputField"
import { RadioField } from "../forms/radio-field/RadioField"


interface CreateFormCategoryProps {
    onChange: (name: string, value: string | number) => void,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
    createForm: any
}

export const CreateFormCategory: React.FC<CreateFormCategoryProps> = (props) => {
    const { createForm: category, onChange, onSubmit } = props
    return (
        <form className="form swipe__left__body__form">
            <InputField type='text' label='Category Name:' name="name" value={category.name} onChange={onChange}/>
            <InputField type='color' label='Category Color:' name="color" value={category.color} onChange={onChange}/>
            <RadioField label="Category Type:" name="type" options={[
                {
                    value: ECategoryType.EXPENSE,
                    display_value: ECategoryType.EXPENSE,
                    checked: category.type === ECategoryType.EXPENSE
                },
                {
                    value: ECategoryType.INCOME,
                    display_value: ECategoryType.INCOME,
                    checked: category.type === ECategoryType.INCOME
                },
            ]}
                onChange={onChange}
            />
            {/* <InputField type='number' id='totalCash' label='Category Total Cash:' name="totalCash" value={account.totalCash} onChange={onChange}/> */}
            <SubmitFormButton onClick={onSubmit}/>
        </form>
    )
}
