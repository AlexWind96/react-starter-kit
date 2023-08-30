import Konva from 'konva'
import { FC, ReactNode, useEffect, useRef } from 'react'
import { Stage } from 'react-konva'
import { useResizeObserver } from '@mantine/hooks'
import { useAppSelector } from '@shared/hooks'
import { selectCanvas, selectVideo } from '@features/video-editor/model'
import { useCanvas } from '../../../hooks'

type CanvasWrapperProps = {
  children: ReactNode
}

export const CanvasWrapper: FC<CanvasWrapperProps> = ({ children }) => {
  const [ref, { width: containerWidth }] = useResizeObserver()
  const stageRef = useRef<Konva.Stage | null>(null)
  const canvasHeight = useAppSelector(selectCanvas.height)
  const canvasWidth = useAppSelector(selectCanvas.width)
  const isPlaying = useAppSelector(selectVideo.isPlaying)
  const actions = useCanvas()
  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target.attrs.id === 'video'
    if (clickedOnEmpty) {
      actions.setSelectedOverlayId(null)
    }
  }
  useEffect(() => {
    const width = containerWidth || ref.current?.offsetWidth || 0
    const scale = width / canvasWidth
    stageRef.current?.width(canvasWidth * scale)
    stageRef.current?.height(canvasHeight * scale)
    stageRef.current?.scale({ x: scale, y: scale })
    actions.setCanvasScale(scale)
  }, [containerWidth])

  useEffect(() => {
    if (isPlaying) {
      actions.setSelectedOverlayId(null)
    }
  }, [isPlaying])

  return (
    <div ref={ref}>
      <Stage
        height={canvasHeight}
        width={canvasWidth}
        ref={stageRef}
        style={{ background: 'black' }}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        {children}
      </Stage>
    </div>
  )
}
