import { FC } from 'react'
import { useAppSelector } from '@shared/hooks'
import { selectVideo } from '@features/video-editor/model'
import { getFormattedTimeWithMls } from '../../shared/helpers'

type IStopwatchProps = {}

export const Stopwatch: FC<IStopwatchProps> = () => {
  const time = useAppSelector(selectVideo.time)
  return <div className={'text-white'}>{getFormattedTimeWithMls(time)}</div>
}
