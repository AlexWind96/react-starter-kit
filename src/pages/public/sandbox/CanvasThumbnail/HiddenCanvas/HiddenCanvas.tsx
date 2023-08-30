import Konva from 'konva'
import React, { RefObject, forwardRef } from 'react'
import { Image, Layer, Stage, Text } from 'react-konva'

type HiddenCanvasProps = {
  title: string
  author: string
  ref: RefObject<Konva.Layer>
  image?: HTMLImageElement
}

export const HiddenCanvas = forwardRef<Konva.Layer, HiddenCanvasProps>(
  ({ title, author, image }, ref) => {
    return (
      <Stage width={1280} height={720} style={{ display: 'none' }}>
        <Layer ref={ref}>
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
    )
  }
)
