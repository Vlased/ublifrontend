import { ArticleBlockCode } from '../../model/types/article'
import { memo } from 'react'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleBlockCode
}

const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = memo(({
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
