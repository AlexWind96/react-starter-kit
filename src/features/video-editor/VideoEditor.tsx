import { FC, memo } from 'react'
import { Container } from '@mantine/core'
import { VideoProvider } from './hooks'
import { PlayerControls, TimeTracker, Trimmer, VideoCanvas } from './ui'
import { OverlayTimeControl } from './ui/OverlayTimeControl'

type IVideoEditorProps = {}

export const VideoEditorComponent: FC<IVideoEditorProps> = () => {
  return (
    <div className={'flex flex-col gap-4 h-full'}>
      <Container size={'30rem'}>
        <div className={'flex flex-col gap-2 w-full'}>
          <VideoCanvas />
          <PlayerControls />
        </div>
      </Container>
      <div className={'flex-1 px-8 py-4'}>
        <div className={'flex flex-col gap-16 relative h-full'}>
          <TimeTracker />
          <Trimmer />
          <OverlayTimeControl />
        </div>
      </div>
    </div>
  )
}

const MemoizedVideoEditor = memo(VideoEditorComponent)

export const VideoEditor = () => {
  return (
    <VideoProvider>
      <MemoizedVideoEditor />
    </VideoProvider>
  )
}
