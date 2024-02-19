import { ArticleView } from '../../model/const/const'
import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'
import styles from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = ({
  className,
  view
}) => {
  if (view === ArticleView.LIST) {
    return (
      <div className={classNames([styles[view], className])}>
        <Card>
          <div className={styles.header}>
            <Skeleton
              width={30}
              height={30}
              border="50%"
            />
            <Skeleton
              width={150}
              height={16}
              className={styles.username}
            />
            <Skeleton
              width={150}
              height={16}
              className={styles.date}
            />
          </div>
          <Skeleton
            width={250}
            height={24}
            className={styles.title}
          />
          <Skeleton
            width="100%"
            height={200}
            className={styles.image}
          />
          <div className={styles.footer}>
            <Skeleton
              width={200}
              height={36}
            />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames([styles[view], className])}>
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton
            width={130}
            height={16}
            className={styles.types}
          />
        </div>
        <Skeleton
          width={150}
          height={16}
          className={styles.title}
        />
      </Card>
    </div>
  )
}

export default ArticleListItemSkeleton
