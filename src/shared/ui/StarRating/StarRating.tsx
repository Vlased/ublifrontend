import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, memo, useCallback, useState } from 'react'
import styles from './StarRating.module.scss'
import StarIcon from '@/shared/assets/icons/star_icon.svg'
import Icon from '../Icon/Icon'

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating: FC<StarRatingProps> = memo(({
  className,
  onSelect,
  size = 30,
  selectedStars = 0
}) => {
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const handleSetCurrentStarsCount = useCallback((starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }, [isSelected])

  const handleStarClick = useCallback((starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }, [isSelected, onSelect])

  return (
    <div>
      {stars.map((starNumber) => (
        <Icon
          Svg={StarIcon}
          key={`star-${starNumber}`}
          className={
            classNames(
              [styles.starIcon, className],
              {
                [styles.hovered]: currentStarsCount >= starNumber,
                [styles.selected]: isSelected
              }
            )
          }
          width={size}
          height={size}
          onMouseEnter={handleSetCurrentStarsCount(starNumber)}
          onMouseLeave={handleSetCurrentStarsCount(0)}
          onClick={handleStarClick(starNumber)}
        />
      ))}
    </div>
  )
})
