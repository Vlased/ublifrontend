// eslint-disable-next-line
import { getProfileData } from '@/pages/ProfilePage'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import { getAuthData } from '@/entities/User'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import styles from './EditableProfileCardHeader.module.scss'

export const EditableProfileCardHeader = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(getAuthData)
  const profileData = useSelector(getProfileData)
  const readonly = useSelector(getProfileReadonly)

  const canEdit = useMemo(() => authData?.id === profileData?.id, [authData?.id, profileData?.id])

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
      {canEdit && (
        <div className={styles.buttonsWrapper}>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTLINED}
                className={styles.editButton}
                onClick={handleEdit}
                data-testid="EditableProfileCardHeader.EditButton"
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
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t('Save')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINED_RED}
                  className={styles.editButton}
                  onClick={handleCancel}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t('Cancel')}
                </Button>
              </div>
            )}
        </div>
      )}
    </div>
  )
}
