import React from 'react'
import { Flex, FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'flexDirection'>

export const VStack: React.FC<VStackProps> = (props) => {
  return (
    <Flex
      flexDirection="column"
      {...props}
    />
  )
}
