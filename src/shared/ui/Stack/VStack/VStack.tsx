import { FC } from 'react'
import { Flex, FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'flexDirection'>

export const VStack: FC<VStackProps> = (props) => {
  return (
    <Flex
      flexDirection="column"
      {...props}
    />
  )
}
