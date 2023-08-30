import { FC, useState } from 'react'
import { Text, rem, useMantineTheme } from '@mantine/core'
import { useMove } from '@mantine/hooks'

type IFramedSliderProps = {}

export const FramedSlider: FC<IFramedSliderProps> = () => {
  const theme = useMantineTheme()
  const [value, setValue] = useState(0.2)
  const { ref } = useMove(({ x }) => setValue(x))

  return (
    <>
      <div className={'flex justify-center'}>
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(16),
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: `${value * 100}%`,
              height: rem(16),
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[2],
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: `calc(${value * 100}% - ${rem(8)})`,
              top: 0,
              width: rem(16),
              height: rem(16),
              backgroundColor: theme.colors.blue[7],
            }}
          />
        </div>
      </div>

      <Text align="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  )
}
