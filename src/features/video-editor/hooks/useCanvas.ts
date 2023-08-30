import { useCallback, useMemo } from 'react'
import { useAppDispatch } from '@shared/hooks'
import { videoEditorActions } from '../model'
import { OverlayShape } from '../types'

export const useCanvas = () => {
  const dispatch = useAppDispatch()

  const setCanvasScale = useCallback((scale: number) => {
    dispatch(videoEditorActions.setCanvasScale(scale))
  }, [])

  const setSelectedOverlayId = useCallback((id: string | null) => {
    dispatch(videoEditorActions.setSelectedOverlay(id))
  }, [])

  const setOverlayTimeRange = useCallback((id: string, [startTime, endTime]: [number, number]) => {
    dispatch(videoEditorActions.changeOverlayTimeRange({ id, startTime, endTime }))
  }, [])

  const changeOverlayShape = useCallback((newShape: OverlayShape) => {
    dispatch(videoEditorActions.changeOverlayShape(newShape))
  }, [])

  return useMemo(
    () => ({ setCanvasScale, setSelectedOverlayId, changeOverlayShape, setOverlayTimeRange }),
    [setCanvasScale, setSelectedOverlayId, changeOverlayShape, setOverlayTimeRange]
  )
}
