import { FC, memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { Comment } from '../../model/types/comment'
import CommentCard from '../CommentCard/CommentCard'
import styles from './CommentList.module.scss'

interface CommentListProps {
  comments?: Comment[]
  isLoading?: boolean
}

const CommentList: FC<CommentListProps> = memo(({ comments, isLoading }) => {
  if (!comments?.length) {
    return (
      <Text>
        No comments here
      </Text>
    )
  }

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          isLoading={isLoading}
          className={styles.comment}
        />
      ))}
    </div>
  )
})

export default CommentList
