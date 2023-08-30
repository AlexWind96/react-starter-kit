import React from 'react'
import { rem } from '@mantine/core'

export const PlayButton: React.FC<CustomIcon> = ({ size, style, ...others }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      style={{ width: rem(size), height: rem(size), ...style }}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      {...others}
    >
      <g id="button/play-btn">
        <circle id="Ellipse 187" cx="20" cy="20" r="19" stroke="currentColor" strokeOpacity="0.5" />
        <path
          id="Vector 20"
          d="M26.5909 20.1135L16.3636 13.1816V27.0453L26.5909 20.1135Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
