import { FC } from 'react'
import { Box, Text } from '@mantine/core'
import img from '../Frame 1.jpg'

type PreviewBoxProps = {}

export const PreviewBox: FC<PreviewBoxProps> = () => {
  return (
    <Box className={'aspect-video w-full relative'}>
      <img src={img} alt={'background'} width={'100%'} style={{ objectFit: 'cover' }} />
      <div className={'absolute inset-0 left-1/3'}>
        <Text
          className={'h-2/3'}
          fz={80}
          style={{ color: 'white', display: 'flex', alignItems: 'center' }}
          lts={5}
          lh={'125%'}
        >
          RISK FACTORS AND CAUSE OF HASHIMOTO’S DISEASE
        </Text>
        <Text
          className={'h-1/3'}
          fz={40}
          style={{ color: '#EAE15E', display: 'flex', alignItems: 'center' }}
        >
          DR.PAUL YOUNG
        </Text>
      </div>
    </Box>
  )
}
