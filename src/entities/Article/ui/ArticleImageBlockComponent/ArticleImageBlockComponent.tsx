import { ArticleBlockImage } from '../../model/types/article'
import { memo } from 'react'
import styles from './ArticleImageBlockComponent.module.scss'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleBlockImage
}

const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = memo(({
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
