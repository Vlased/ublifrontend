import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData'
import { memo, useCallback } from 'react'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { ProfileCard } from '../../../entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ValidateProfileErrors } from '../model/types/profile'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = memo(() => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const validateErrors = useSelector(getProfileValidateErrors)
  const isLoading = useSelector(getProfileLoading)
  const readonly = useSelector(getProfileReadonly)

  const validateErrorsTranslates = {
    [ValidateProfileErrors.SERVER_ERROR]: t('Unknown Server Error Happened'),
    [ValidateProfileErrors.NO_PROFILE_DATA]: t('No Profile Data Provided'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Incorrect FirstName or LastName'),
    [ValidateProfileErrors.INCORRECT_USER_COUNTRY]: t('Incorrect Country'),
    [ValidateProfileErrors.INCORRECT_USER_AGE]: t('Incorrect Age')
  }

  const handleFirstNameChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstName: value }))
  }, [dispatch])

  const handleLastNameChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value }))
  }, [dispatch])

  const handleAgeChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) }))
  }, [dispatch])

  const handleCityChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [dispatch])

  const handleUsernameChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [dispatch])

  const handleAvatarChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [dispatch])

  const handleCurrencyChange = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }))
  }, [dispatch])

  const handleCountryChange = useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({ country: value }))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchProfileData())
  })

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <ProfilePageHeader />
      {validateErrors?.map((validateError) => (
        <Text
          theme={TextTheme.ERROR}
          key={validateError}
        >
          {validateErrorsTranslates[validateError]}
        </Text>
      ))}
      <ProfileCard
        formData={formData}
        error={error}
        isLoading={isLoading}
        readonly={readonly}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleAgeChange={handleAgeChange}
        handleCityChange={handleCityChange}
        handleUsernameChange={handleUsernameChange}
        handleAvatarChange={handleAvatarChange}
        handleCurrencyChange={handleCurrencyChange}
        handleCountryChange={handleCountryChange}
      />
    </DynamicModuleLoader>
  )
})

export default ProfilePage
