import { profileActions } from '../../model/slice/profileSlice'
import { getProfileReadonly } from 'pages/ProfilePage/model/selectors/getProfileReadonly/getProfileReadonly'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import styles from './ProfilePageHeader.module.scss'
import { updateProfileData } from 'pages/ProfilePage/model/services/updateProfileData/updateProfileData'

const ProfilePageHeader = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const handleCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const handleSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={styles.header}>
      <Text title={t('Profile')} />
      {readonly
        ? (
          <Button
            theme={ButtonTheme.OUTLINED}
            className={styles.editButton}
            onClick={handleEdit}
          >
            {t('Edit')}
          </Button>
        )
        : (
          <div className={styles.editActionsButtonsContainer}>
            <Button
              theme={ButtonTheme.OUTLINED}
              className={styles.editButton}
              onClick={handleSave}
            >
              {t('Save')}
            </Button>
            <Button
              theme={ButtonTheme.OUTLINED_RED}
              className={styles.editButton}
              onClick={handleCancel}
            >
              {t('Cancel')}
            </Button>
          </div>
        )}
    </div>
  )
}

export default ProfilePageHeader
