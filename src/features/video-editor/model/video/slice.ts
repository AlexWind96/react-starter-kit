import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface VideoState {
  duration: number
  isPlaying: boolean
  volume: number
  muted: boolean
  time: number
  src?: string
  start: number
  end?: number
  isLoaded: boolean
  isEnded: boolean
  dimensions: {
    height: number
    width: number
  }
}

const initialState: VideoState = {
  isPlaying: false,
  volume: 100,
  muted: false,
  time: 0,
  start: 0,
  isLoaded: false,
  duration: 0,
  isEnded: false,
  dimensions: {
    width: 640,
    height: 360,
  },
}

export const slice = createSlice({
  name: 'EditorVideoState',
  initialState,
  reducers: {
    setLoadedVideo(
      state,
      action: PayloadAction<{ duration: number; dimensions: { width: number; height: number } }>
    ) {
      state.duration = action.payload.duration
      state.end = action.payload.duration
      state.start = 0
      state.time = 0
      state.isLoaded = true
      state.dimensions = action.payload.dimensions
    },
    setVideoDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload
      state.end = action.payload
    },
    setVideoRange(state, action: PayloadAction<{ start: number; end: number }>) {
      state.end = action.payload.end
      state.start = action.payload.start
      // state.time = action.payload.start
    },
    setVideoIsPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload
    },
    setVideoEnded(state, action: PayloadAction<boolean>) {
      state.isEnded = action.payload
    },
    setVideoVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload
    },
    setVideoMuted(state, action: PayloadAction<boolean>) {
      state.muted = action.payload
    },
    setVideoTime(state, action: PayloadAction<number>) {
      state.time = action.payload
    },
    setVideoSrc(state, action: PayloadAction<string>) {
      state.src = action.payload
    },
    cleanVideoState() {
      return initialState
    },
  },
})
