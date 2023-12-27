import { ArticleList, ArticleView } from '../../../../entities/Article'
import { memo } from 'react'

const ArticlesPage = () => {
  return (
    <div>
      <ArticleList
        articles={[]}
        view={ArticleView.LIST}
      />
    </div>
  )
}

export default memo(ArticlesPage)
