import axios from "axios"
import { useMemo } from "react"
import { useActions } from "../../hooks/useActions"
import { useQuery } from "../../hooks/useQuery"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { TMode, TPages } from "../../types/swipe"
import { DeleteButton } from "../buttons/delete/DeleteButton"
import { CreateFormAccount } from "./CreateFormAccount"
import { CreateFormCategory } from "./CreateFormCategory"
import { CreateFormTransaction } from "./CreateFormTransaction"

interface CreateFormProps {
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    // onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
    currentPage: TPages,
    mode: TMode
}

export const CreateForm: React.FC<CreateFormProps> = (props) => {
    const type = useQuery().get('type')
    const grouped = useQuery().get('grouped')

    const { currentPage, mode } = props
    const { hideSwipe, showFeedback, 
        editAccount, fetchAccounts, 
        editCategory, fetchCategories, 
        editTransaction, fetchTransactions, 
    } = useActions()
    const { account: { account }, category: { category }, transaction: { transaction } } = useTypedSelector(state => state)

    const { editItem, deleteItem, updateOrCreateItem, fetchItems, renderForm } = useMemo(() => {
        if (currentPage === 'accounts') {
            let createForm = account
            let { _id, ...reqBody } = createForm

            return {
                editItem: editAccount,
                deleteItem: async () => await axios.delete(`/${currentPage}/${_id}`),
                updateOrCreateItem: async () => mode === 'edit' ? await axios.patch(`${currentPage}/${_id}`, account) : await axios.post(`${currentPage}`, reqBody ),
                fetchItems: () => fetchAccounts('/accounts'),
                renderForm: (handleChange: (name: string, value: string | number) => void, handleSubmit: React.MouseEventHandler<HTMLButtonElement>) => <CreateFormAccount createForm={createForm} onChange={handleChange} onSubmit={handleSubmit} />
            }
        }
        if (currentPage === 'categories') {
            let createForm = category
            let { _id, ...reqBody } = createForm
            
            return {
                editItem: editCategory,
                deleteItem: async () => await axios.delete(`/${currentPage}/${_id}`),
                updateOrCreateItem: async () => mode === 'edit' ? await axios.patch(`${currentPage}/${_id}`, category) : await axios.post(`${currentPage}`, reqBody ),
                fetchItems: () => fetchCategories('/categories'),
                renderForm: (handleChange: (name: string, value: string | number) => void, handleSubmit: React.MouseEventHandler<HTMLButtonElement>) => <CreateFormCategory createForm={createForm} onChange={handleChange} onSubmit={handleSubmit}/>
            }
        }
        if (currentPage === 'transactions') {
            let createForm = transaction
            let { _id, ...reqBody } = createForm
        
            return {
                editItem: editTransaction,
                deleteItem: async () => await axios.delete(`/${currentPage}/${_id}`),
                updateOrCreateItem: async () => mode === 'edit' ? await axios.patch(`${currentPage}/${_id}`, transaction) : await axios.post(`${currentPage}`, reqBody ),
                fetchItems: () => fetchTransactions(`/transactions?type=${type}&grouped=${grouped}`),
                renderForm: (handleChange: (name: string, value: string | number) => void, handleSubmit: React.MouseEventHandler<HTMLButtonElement>) => <CreateFormTransaction createForm={createForm} onChange={handleChange} onSubmit={handleSubmit}/>
            }
        }
        return {}

    }, [currentPage, mode,
        account, editAccount, fetchAccounts, 
        category, editCategory, fetchCategories,
        transaction, editTransaction, fetchTransactions, type, grouped, 
    ])

    const handleChange = (name: string, value: any): void => {
        editItem && editItem({
            key: name,
            value: value
        })
    }
    
    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()

        try {
            updateOrCreateItem && await updateOrCreateItem()
            fetchItems && fetchItems()
            hideSwipe('left', currentPage, mode)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                showFeedback('danger', error.response?.data.msg || 'Server Error')
            } else if (error instanceof Error) {
                console.log('Error error', error.message) // works, `e` narrowed to Error
                showFeedback('success', error.message)
            }
        }
        
    }

    const handleDeleteClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
        try {
            deleteItem && await deleteItem()
            fetchItems && fetchItems()
            hideSwipe('left', currentPage, mode)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                showFeedback('danger', error.response?.data.msg || 'Server Error')
            } else if (error instanceof Error) {
                console.log('Error error', error.message) // works, `e` narrowed to Error
                showFeedback('success', error.message)
            }
        }
    }
    
    if (renderForm) return (
        <>
        {renderForm(handleChange, handleSubmit)}
        {mode === 'edit' && <DeleteButton onClick={handleDeleteClick}/>}
        </>
        )
    return <div>'null'</div>
}
