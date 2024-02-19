import { FC, memo } from 'react'
import { Code } from '@/shared/ui/Code'
import { ArticleBlockCode } from '../../model/types/article'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleBlockCode
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo(({
  className,
  block
}) => {
  return (
    <div className={className}>
      <Code>
        {block.code}
      </Code>
    </div>
  )
})

export default ArticleCodeBlockComponent
