import { FC, useState } from 'react'
import { rem, useMantineTheme } from '@mantine/core'
import { useMove } from '@mantine/hooks'
import { useAppSelector } from '@shared/hooks'
import { selectVideo } from '@features/video-editor/model'
import { useVideoActions } from '../../hooks'
import { getFormattedTimeWithMls } from '../../shared/helpers'

type TimeTrackerProps = {}

export const TimeTracker: FC<TimeTrackerProps> = () => {
  const theme = useMantineTheme()
  const time = useAppSelector(selectVideo.time)
  const duration = useAppSelector(selectVideo.duration)
  const { setVideoTime } = useVideoActions()
  const { ref } = useMove(({ x }) => setVideoTime(x * duration))

  return (
    <div className={'absolute inset-0'}>
      <div
        ref={ref}
        style={{
          width: `100%`,
          height: '100%',
          backgroundColor: theme.fn.darken('#293340', 0.2),
          position: 'relative',
        }}
      >
        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: `calc(${(time / duration) * 100}% - ${rem(8)})`,
            top: 0,
            width: rem(16),
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            className={'cursor-grab'}
            style={{ backgroundColor: theme.colors.gray[3], padding: '2px', borderRadius: rem(8) }}
          >
            {getFormattedTimeWithMls(time)}
          </div>

          <div
            className={'cursor-grab'}
            style={{
              width: '2px',
              height: `${ref.current?.offsetHeight - 32 || 200}px`,
              backgroundColor: theme.colors.gray[1],
              opacity: 0.4,
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>
      </div>
    </div>
  )
}
