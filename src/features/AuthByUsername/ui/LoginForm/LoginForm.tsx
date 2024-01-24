import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

interface LoginFormProps {
  onSuccess: () => void
}

const LoginForm: FC<LoginFormProps> = memo(({
  onSuccess
}) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

  const handleUsernameChange = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const handlePasswordChange = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  loginByUsername({ username, password })

  const handleLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, onSuccess, username, password])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={styles.loginForm}>
        <Text title="Authorization" />
        <Input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder={t('Username')}
          autoFocus
        />
        <Input
          type="text"
          value={password}
          onChange={handlePasswordChange}
          placeholder={t('Password')}
        />
        {error && <Text theme={TextTheme.ERROR}>{error}</Text>}
        <Button
          theme={ButtonTheme.OUTLINED}
          className={styles.loginButton}
          onClick={handleLoginClick}
          disabled={isLoading}
        >
          {t('Enter')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
