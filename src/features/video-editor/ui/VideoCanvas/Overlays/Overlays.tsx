import { FC } from 'react'
import { useAppSelector } from '@shared/hooks'
import { selectCanvas, selectVideo } from '@features/video-editor/model'
import { useCanvas } from '../../../hooks'
import { Overlay } from './Overlay'

type OverlaysProps = {}

export const Overlays: FC<OverlaysProps> = () => {
  const overlays = useAppSelector(selectCanvas.overlays)
  const selectedOverlay = useAppSelector(selectCanvas.selectedOverlay)
  const actions = useCanvas()
  const isPlaying = useAppSelector(selectVideo.isPlaying)

  return (
    <>
      {overlays.map((overlay, i) => {
        return (
          <Overlay
            key={overlay.shape.id}
            src={overlay.src}
            shapeProps={overlay.shape}
            isSelected={overlay.shape.id === selectedOverlay}
            onSelect={() => {
              !isPlaying && actions.setSelectedOverlayId(overlay.shape.id)
            }}
            onChange={actions.changeOverlayShape}
            startTime={overlay.startTime}
            endTime={overlay.endTime}
          />
        )
      })}
    </>
  )
}
