import React, { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo(({ className, short }) => {
  const { t, i18n } = useTranslation()
  const currentLanguage = useMemo(() => i18n.language, [i18n.language])

  const toggle = useCallback(() => {
    const newLanguage = currentLanguage === 'en' ? 'ua' : 'en'
    i18n.changeLanguage(newLanguage)
  }, [i18n, currentLanguage])

  return (
    <div className={className}>
      <Button theme={ButtonTheme.CLEAR} onClick={toggle}>
        {t(`${short ? 'Short ' : ''}current language`)}
      </Button>
    </div>
  )
})
