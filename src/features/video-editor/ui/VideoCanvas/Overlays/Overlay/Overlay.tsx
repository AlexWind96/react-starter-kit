import Konva from 'konva'
import { FC, useEffect, useMemo, useRef } from 'react'
import { Image, Transformer } from 'react-konva'
import useImage from 'use-image'
import { useAppSelector } from '@shared/hooks'
import { selectVideo } from '@features/video-editor/model'
import { OverlayShape } from '../../../../types'

type OverlayProps = {
  src: string
  shapeProps: OverlayShape
  isSelected: boolean
  onSelect: () => void
  onChange: (newAttrs: OverlayShape) => void
  startTime: number
  endTime: number
}

export const Overlay: FC<OverlayProps> = ({
  src,
  isSelected,
  shapeProps,
  onSelect,
  onChange,
  endTime,
  startTime,
}) => {
  const shapeRef = useRef<Konva.Image>(null)
  const trRef = useRef<Konva.Transformer>(null)
  const [image] = useImage(src)
  const time = useAppSelector(selectVideo.time)
  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current])
      trRef.current.getLayer()?.batchDraw()
    }
  }, [isSelected, trRef.current, shapeRef.current])

  const isVisible = useMemo(() => {
    return endTime ? time >= startTime && time <= endTime : false
  }, [time, endTime, startTime])
  return (
    <>
      <Image
        visible={isVisible}
        ref={shapeRef}
        {...shapeProps}
        onClick={onSelect}
        onTap={onSelect}
        image={image}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          })
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current
          if (!node) return
          const scaleX = node.scaleX()
          const scaleY = node.scaleY()

          // we will reset it back
          node.scaleX(1)
          node.scaleY(1)
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          })
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox
            }
            return newBox
          }}
        />
      )}
    </>
  )
}
