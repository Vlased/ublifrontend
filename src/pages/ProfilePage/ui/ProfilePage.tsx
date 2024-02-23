import { EditableProfileCard } from '@/features/EditableProfileCard'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

const ProfilePage = memo(() => {
  const { id } = useParams()

  if (!id && PROJECT !== 'storybook') {
    return (
      <VStack justifyContent="center" max>
        <Text title="An unknown error happened" />
      </VStack>
    )
  }

  return (
    <Page data-testid="ProfilePage">
      <EditableProfileCard id={id} />
    </Page>
  )
})

export default ProfilePage
