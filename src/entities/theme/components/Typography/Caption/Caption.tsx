import React, { FC, PropsWithChildren } from 'react'
import { Text, TextProps } from '@mantine/core'

type ICaptionProps = PropsWithChildren & TextProps

export const Caption: FC<ICaptionProps> = ({ children, ...rest }) => {
  return (
    <Text fz={'xs'} fw={400} {...rest}>
      {children}
    </Text>
  )
}
