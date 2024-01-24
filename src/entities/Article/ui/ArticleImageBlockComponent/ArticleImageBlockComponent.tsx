import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { ArticleBlockImage } from '../../model/types/article'
import styles from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleBlockImage
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({
  block,
  className
}) => {
  return (
    <div className={classNames([styles.container, className])}>
      <img
        src={block.src}
        alt={block.title}
        className={styles.image}
      />
      {block.title && (
        <Text align={TextAlign.CENTER}>
          {block.title}
        </Text>
      )}
    </div>
  )
})

export default ArticleImageBlockComponent
