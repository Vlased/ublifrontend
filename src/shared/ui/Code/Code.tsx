import { FC, useCallback } from 'react'
import CopyIcon from '@/shared/assets/icons/copy_icon.svg'
import { Button, ButtonTheme } from '../Button/Button'
import { Icon } from '../Icon'
import styles from './Code.module.scss'

interface CodeProps {
  children: string
}

export const Code: FC<CodeProps> = ({ children }) => {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children)
  }, [children])

  return (
    <pre className={styles.code}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={styles.copyButton}
        onClick={handleCopy}
      >
        <Icon
          Svg={CopyIcon}
          className={styles.icon}
        />
      </Button>
      <code>
        {children}
      </code>
    </pre>
  )
}
