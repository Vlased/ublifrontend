import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import styles from './AddCommentForm.module.scss'

interface AddCommentFormProps {
  handleCommentSend: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ handleCommentSend }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)

  const handleCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onCommentSend = useCallback(() => {
    if (!text) {
      return
    }

    handleCommentTextChange('')
    handleCommentSend(text)
  }, [handleCommentTextChange, handleCommentSend, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={styles.container}>
        <Input
          placeholder='Enter comment text'
          value={text}
          onChange={handleCommentTextChange}
          className={styles.input}
        />
        <Button
          onClick={onCommentSend}
        >
          {t('Send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default AddCommentForm
