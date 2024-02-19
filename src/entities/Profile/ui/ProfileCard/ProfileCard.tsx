import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Input } from '@/shared/ui/Input/Input'
import { Loader } from '@/shared/ui/Loader/Loader'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text'
import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import styles from './ProfileCard.module.scss'
import { Currency } from '@/shared/constants/currency'
import { Country } from '@/shared/constants/country'
import { Profile } from '@/shared/types/profile'

interface ProfileCardProps {
  formData?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  handleFirstNameChange?: (value?: string) => void
  handleLastNameChange?: (value?: string) => void
  handleAgeChange?: (value?: string) => void
  handleCityChange?: (value?: string) => void
  handleUsernameChange?: (value?: string) => void
  handleAvatarChange?: (value?: string) => void
  handleCurrencyChange?: (value?: Currency) => void
  handleCountryChange?: (value?: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = ({
  formData,
  error,
  isLoading,
  readonly,
  handleFirstNameChange,
  handleLastNameChange,
  handleAgeChange,
  handleCityChange,
  handleUsernameChange,
  handleAvatarChange,
  handleCurrencyChange,
  handleCountryChange
}) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <VStack
        className={classNames([styles.profileCard, styles.loadingContainer])}
        justifyContent="center"
        max
      >
        <Loader />
      </VStack>
    )
  }

  if (error) {
    return (
      <VStack
        className={classNames([styles.profileCard, styles.errorContainer])}
        justifyContent="center"
        max
      >
        <Text
          title={t('An unknown error happened')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        >
          {t('Try to refresh the page')}
        </Text>
      </VStack>
    )
  }

  return (
    <VStack
      className={classNames([styles.profileCard], { [styles.editing]: !readonly })}
      alignItems="flex-start"
    >
      {formData?.avatar && (
        <VStack max>
          <Avatar
            src={formData?.avatar}
            alt="Avatar"
          />
        </VStack>
      )}
      <Input
        value={formData?.firstName}
        placeholder="Your First Name"
        className={styles.input}
        readonly={readonly}
        onChange={handleFirstNameChange}
        data-testid="ProfileCard.FirstName"
      />
      <Input
        value={formData?.lastName}
        placeholder="Your Last Name"
        className={styles.input}
        readonly={readonly}
        onChange={handleLastNameChange}
        data-testid="ProfileCard.LastName"
      />
      <Input
        value={formData?.age}
        placeholder="Your Age"
        className={styles.input}
        readonly={readonly}
        onChange={handleAgeChange}
      />
      <Input
        value={formData?.city}
        placeholder="Your City"
        className={styles.input}
        readonly={readonly}
        onChange={handleCityChange}
      />
      <Input
        value={formData?.username}
        placeholder="Your Username"
        className={styles.input}
        readonly={readonly}
        onChange={handleUsernameChange}
      />
      <Input
        value={formData?.avatar}
        placeholder="Your Avatar"
        className={styles.input}
        readonly={readonly}
        onChange={handleAvatarChange}
      />
      <CurrencySelect
        value={formData?.currency}
        onChange={handleCurrencyChange}
        readonly={readonly}
        className={styles.input}
      />
      <CountrySelect
        value={formData?.country}
        onChange={handleCountryChange}
        readonly={readonly}
        className={styles.input}
      />
    </VStack>
  )
}
