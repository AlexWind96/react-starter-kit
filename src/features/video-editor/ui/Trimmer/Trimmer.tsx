import { FC, useEffect, useState } from 'react'
import { RangeSlider } from '@mantine/core'
import { useAppSelector } from '@shared/hooks'
import { useVideoActions } from '../../hooks'
import { selectVideo } from '../../model'
import { getFormattedTimeWithMls } from '../../shared/helpers'

type TrimmerProps = {}

export const Trimmer: FC<TrimmerProps> = () => {
  const duration = useAppSelector(selectVideo.duration)
  const isLoaded = useAppSelector(selectVideo.isLoaded)
  const { setVideoRange } = useVideoActions()

  const [value, setValue] = useState<[number, number]>([0, 0])

  useEffect(() => {
    if (isLoaded) {
      setValue([value[0], duration])
    }
  }, [isLoaded])

  if (!isLoaded) {
    return null
  }
  return (
    <div className={'mt-8'}>
      <RangeSlider
        minRange={1}
        min={0}
        max={duration}
        step={0.1}
        onChange={setValue}
        value={value}
        label={(value) => {
          return getFormattedTimeWithMls(value)
        }}
        onChangeEnd={setVideoRange}
      />
    </div>
  )
}
