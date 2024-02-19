import { useParams } from 'react-router-dom'
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

const ArticleEditPage = () => {
  const { id } = useParams()
  const isEdit = Boolean(id)

  return (
    <Page>
      <Text title={isEdit ? 'Edit Article' : 'Create New Article'}/>
    </Page>
  )
}

export default ArticleEditPage
