export type Overlay = {
  shape: OverlayShape
  src: string
  startTime: number
  endTime: number
}

export type OverlayShape = {
  id: string
  x: number
  y: number
  width: number
  height: number
}
