import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Drawer } from '@/shared/ui/Drawer'
import { Input } from '@/shared/ui/Input'
import { Modal } from '@/shared/ui/Modal'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating'
import { Text } from '@/shared/ui/Text'
import { FC, memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import styles from './Rating.module.scss'

interface RatingProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const Rating: FC<RatingProps> = memo(({
  className,
  title,
  feedbackTitle,
  hasFeedback,
  onCancel,
  onAccept,
  rate = 0
}) => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const handleStarsSelect = useCallback((selectedStars: number) => {
    setStarsCount(selectedStars)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStars)
    }
  }, [hasFeedback, onAccept])

  const handleCancel = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [starsCount, onCancel])

  const handleAccept = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [starsCount, feedback, onAccept])

  const content = (
    <VStack
      gap="32px"
      max
    >
      <Text title={feedbackTitle} />
      <Input
        placeholder={t('Your Review')}
        className={styles.input}
        value={feedback}
        onChange={setFeedback}
      />
      <HStack
        gap="16px"
        justifyContent="flex-end"
        max
      >
        <Button
          theme={ButtonTheme.OUTLINED_RED}
          onClick={handleCancel}
        >
          {t('Close')}
        </Button>
        <Button onClick={handleAccept}>
          {t('Send')}
        </Button>
      </HStack>
    </VStack>
  )

  return (
    <Card className={className}>
      <VStack gap="8px">
        <Text title={starsCount ? t('Thanks for rating!') : title} />
        <StarRating
          size={40}
          onSelect={handleStarsSelect}
          selectedStars={starsCount}
        />
        <BrowserView>
          <Modal
            isOpen={isModalOpen}
            onClose={handleCancel}
            lazy
          >
            {content}
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer
            isOpen={isModalOpen}
            onClose={handleCancel}
            lazy
          >
            {content}
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  )
})
