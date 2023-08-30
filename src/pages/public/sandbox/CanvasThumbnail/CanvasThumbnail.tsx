import Konva from 'konva'
import React, { FC, forwardRef, useEffect, useRef } from 'react'
import { Image, Layer, Stage, Text } from 'react-konva'
import useImage from 'use-image'
import { useResizeObserver } from '@mantine/hooks'
import { HiddenCanvas } from './HiddenCanvas'
import img from './background.jpg'

type CanvasThumbnailProps = {
  title: string
  author: string
}

export const CanvasThumbnail = forwardRef<Konva.Layer, CanvasThumbnailProps>(
  ({ author, title }, ref) => {
    const [image] = useImage(img)
    const [containerRef, { width }] = useResizeObserver()
    const stageRef = useRef<Konva.Stage | null>(null)
    useEffect(() => {
      const containerWidth = width || containerRef.current?.offsetWidth || 0
      const scale = containerWidth / 1280
      stageRef.current?.width(1280 * scale)
      stageRef.current?.height(720 * scale)
      stageRef.current?.scale({ x: scale, y: scale })
    }, [width])

    return (
      <div className={'flex flex-col w-1/4'} ref={containerRef}>
        <Stage width={1280} height={720} ref={stageRef}>
          <Layer>
            <Image image={image} x={0} y={0} width={1280} height={720} />
            <Text
              x={342}
              y={0}
              text={title}
              fontSize={80}
              width={850}
              height={650}
              wrap={'word'}
              fill={'white'}
              verticalAlign={'middle'}
              fontFamily={'Neufile Grotesk'}
            />
            <Text
              x={342}
              y={520}
              text={author}
              fontSize={40}
              width={850}
              height={167}
              wrap={'word'}
              fill={'#EAE15E'}
              verticalAlign={'middle'}
              fontFamily={'Neufile Grotesk'}
            />
          </Layer>
        </Stage>
        <HiddenCanvas ref={ref} title={title} author={author} image={image} />
      </div>
    )
  }
)
