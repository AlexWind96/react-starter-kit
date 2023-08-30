import { FC, PropsWithChildren } from 'react'
import { Text, TextProps } from '@mantine/core'

type ILabelProps = PropsWithChildren & TextProps

export const Label: FC<ILabelProps> = ({ children, ...rest }) => {
  return (
    <Text size={'xs'} tt={'uppercase'} fw={600} lts={'0.09375rem'} {...rest}>
      {children}
    </Text>
  )
}
