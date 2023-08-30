import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react'
import { FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { useAppSelector } from '@shared/hooks'
import { useVideoControls } from '../../hooks'
import { selectVideo } from '../../model'
import { Stopwatch } from './Stopwatch'

type PlayerControlsProps = {}

export const PlayerControls: FC<PlayerControlsProps> = () => {
  const isPlaying = useAppSelector(selectVideo.isPlaying)
  const isLoaded = useAppSelector(selectVideo.isLoaded)

  const controls = useVideoControls()

  if (!isLoaded) {
    return null
  }

  return (
    <div className={'flex justify-center gap-3'}>
      <ActionIcon onClick={controls.togglePlay} color={'brand'} variant={'filled'}>
        {isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
      </ActionIcon>
      <Stopwatch />
    </div>
  )
}
