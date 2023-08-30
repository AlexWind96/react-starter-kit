import { FC } from 'react'
import { useAppSelector } from '@shared/hooks'
import { useCanvas } from '../../hooks'
import { selectCanvas, selectVideo } from '../../model'
import { Slider } from './Slider'

type OverlayTimeControlProps = {}

export const OverlayTimeControl: FC<OverlayTimeControlProps> = () => {
  const overlays = useAppSelector(selectCanvas.overlays)
  const duration = useAppSelector(selectVideo.duration)
  const isLoaded = useAppSelector(selectVideo.isLoaded)
  const actions = useCanvas()
  return (
    <div>
      {overlays.map((overlay) => {
        return (
          <Slider
            key={overlay.shape.id}
            isLoaded={isLoaded}
            duration={duration}
            onChangeEnd={(values) => {
              actions.setOverlayTimeRange(overlay.shape.id, values)
            }}
            endTime={overlay.endTime}
          />
        )
      })}
    </div>
  )
}
