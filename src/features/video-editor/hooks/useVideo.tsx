import constate from 'constate'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@shared/hooks'
import { selectVideo, videoEditorActions } from '../model'
import { useCanvas } from './useCanvas'
import { useStopwatch } from './useStopwatch'

const useVideo = () => {
  const { isEnded, isPlaying, src, end, time, start } = useAppSelector(selectVideo.state)
  const stopwatch = useStopwatch()
  const dispatch = useAppDispatch()
  const video = useRef<HTMLVideoElement>(document.createElement('video'))
  const canvasActions = useCanvas()

  useEffect(() => {
    if (src) {
      video.current.src = src
    }
  }, [src])

  useEffect(() => {
    if (end && time >= end) {
      pause()
      dispatch(videoEditorActions.setVideoEnded(true))
    }
  }, [time, end])

  const play = useCallback(async () => {
    video.current.currentTime = 0
    await video.current.play()
    stopwatch.start()
  }, [stopwatch.start])

  const resume = useCallback(async () => {
    await video.current.play()
    stopwatch.resume()
  }, [stopwatch.resume])

  const pause = useCallback(() => {
    video.current.pause()
    stopwatch.pause()
  }, [stopwatch.pause])

  const togglePlay = useCallback(async () => {
    if (isPlaying) {
      pause()
    } else {
      await play()
    }
  }, [isPlaying, isEnded, play, resume, pause])

  // Event handlers

  const setVideoTime = useCallback((time: number) => {
    stopwatch.setTime(time)
    video.current.currentTime = time
    canvasActions.setSelectedOverlayId(null)
  }, [])

  const setVideoRange = useCallback(([start, end]: [number, number]) => {
    dispatch(videoEditorActions.setVideoRange({ start, end }))
    // video.current.currentTime = start
  }, [])

  const handleLoadedMetaData = useCallback(() => {
    dispatch(
      videoEditorActions.setLoadedVideo({
        duration: video.current.duration,
        dimensions: { height: video.current.videoHeight, width: video.current.videoWidth },
      })
    )
    video.current.currentTime = 0
  }, [])

  useEffect(() => {
    const instance = video.current

    if (video.current) {
      instance.addEventListener('loadedmetadata', handleLoadedMetaData)
    }
    return () => {
      instance.removeEventListener('loadedmetadata', handleLoadedMetaData)
    }
  }, [video.current])
  const actions = useMemo(() => {
    return {
      setVideoTime,
      setVideoRange,
    }
  }, [setVideoTime, setVideoRange])

  const controls = useMemo(() => {
    return {
      togglePlay,
    }
  }, [togglePlay])

  return {
    video,
    controls,
    actions,
  }
}

const [VideoProvider, useVideoActions, useVideoControls, useVideoInstance] = constate(
  useVideo,
  (value) => value.actions,
  (value) => value.controls,
  (value) => value.video
)

export { VideoProvider, useVideoActions, useVideoControls, useVideoInstance }
