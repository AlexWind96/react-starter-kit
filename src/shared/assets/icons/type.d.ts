import React from 'react'

declare global {
  interface CustomIcon extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string
  }
}
