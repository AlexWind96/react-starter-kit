import { FC, useEffect, useState } from 'react'
import { RangeSlider } from '@mantine/core'
import { getFormattedTimeWithMls } from '../../shared/helpers'

type ISliderProps = {
  isLoaded: boolean
  endTime: number
  duration: number
  onChangeEnd: ([start, end]: [number, number]) => void
}

export const Slider: FC<ISliderProps> = ({ endTime, duration, isLoaded, onChangeEnd }) => {
  const [value, setValue] = useState<[number, number]>([0, 0])
  useEffect(() => {
    if (isLoaded) {
      setValue([value[0], endTime])
    }
  }, [isLoaded])
  return (
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
      onChangeEnd={onChangeEnd}
    />
  )
}
