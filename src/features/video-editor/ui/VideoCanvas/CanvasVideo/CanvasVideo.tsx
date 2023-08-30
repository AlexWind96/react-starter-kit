import Konva from 'konva'
import React, { FC, useMemo } from 'react'
import { Image } from 'react-konva'
import { useAppSelector } from '@shared/hooks'
import { useVideoInstance } from '../../../hooks'
import { selectCanvas, selectVideo } from '../../../model'

type ICanvasVideoProps = {}

export const CanvasVideo: FC<ICanvasVideoProps> = () => {
  const shapeRef = React.useRef<Konva.Image | null>(null)
  const height = useAppSelector(selectCanvas.height)
  const width = useAppSelector(selectCanvas.width)
  const video = useVideoInstance()
  const time = useAppSelector(selectVideo.time)
  const startTime = useAppSelector(selectVideo.start)
  const endTime = useAppSelector(selectVideo.end)
  React.useEffect(() => {
    const interval = setInterval(() => {
      shapeRef.current?.getLayer()?.batchDraw()
    }, 1000 / 60)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const isVisible = useMemo(() => {
    return endTime ? time >= startTime && time <= time : false
  }, [time, endTime, startTime])
  return (
    <Image
      visible={isVisible}
      id={'video'}
      x={width / 2}
      width={width}
      height={height}
      offsetX={width / 2}
      ref={shapeRef}
      image={video.current || undefined}
    />
  )
}
