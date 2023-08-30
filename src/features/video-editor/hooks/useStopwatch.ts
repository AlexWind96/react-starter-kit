import { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@shared/hooks'
import { selectVideo, videoEditorActions } from '../model'

export function useStopwatch() {
  const { time, isPlaying, start: startTime, isEnded } = useAppSelector(selectVideo.state)
  const dispatch = useDispatch()
  const intervalRef = useRef<NodeJS.Timer>()
  const startTimeRef = useRef<number | null>(null)

  const setTime = (time: number) => {
    dispatch(videoEditorActions.setVideoTime(time))
  }

  const setIsPlaying = (flag: boolean) => {
    dispatch(videoEditorActions.setVideoIsPlaying(flag))
    dispatch(videoEditorActions.setVideoEnded(false))
  }
  const start = useCallback(() => {
    if (!isPlaying) {
      startTimeRef.current = isEnded ? performance.now() : performance.now() - time * 1000
      intervalRef.current = setInterval(() => {
        setTime((performance.now() - startTimeRef.current!) / 1000)
      }, 1000 / 60)
      setIsPlaying(true)
    }
  }, [time, isPlaying, isEnded])

  const pause = useCallback(() => {
    if (isPlaying && intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      setIsPlaying(false)
    }
  }, [isPlaying])

  const resume = useCallback(() => {
    if (!isPlaying) {
      startTimeRef.current = performance.now() - time * 1000
      intervalRef.current = setInterval(() => {
        setTime((performance.now() - startTimeRef.current!) / 1000)
      }, 1000 / 60)
      setIsPlaying(true)
    }
  }, [time, isPlaying])

  const reset = (time?: number) => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      setIsPlaying(false)
      setTime(time || 0)
    }
  }

  return {
    start,
    pause,
    reset,
    setTime,
    resume,
  }
}
