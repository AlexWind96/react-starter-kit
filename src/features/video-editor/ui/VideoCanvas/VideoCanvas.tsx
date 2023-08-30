import Konva from 'konva'
import { FC, useEffect, useRef } from 'react'
import { Layer } from 'react-konva'
import { CanvasVideo } from './CanvasVideo'
import { CanvasWrapper } from './CanvasWrapper'
import { Overlays } from './Overlays'

type VideoCanvasProps = {}

export const VideoCanvas: FC<VideoCanvasProps> = () => {
  const canvasRef = useRef<Konva.Layer | null>(null)

  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault()
    }
    if (canvasRef.current) {
      const canvas = canvasRef.current.getNativeCanvasElement()
      canvas.addEventListener('contextmenu', handleContextmenu)
      return function cleanup() {
        canvas.removeEventListener('contextmenu', handleContextmenu)
      }
    }
  }, [])

  return (
    <CanvasWrapper>
      <Layer ref={canvasRef}>
        <CanvasVideo />
        <Overlays />
      </Layer>
    </CanvasWrapper>
  )
}
