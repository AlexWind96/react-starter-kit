import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Overlay, OverlayShape } from '../../types'

interface VideoEditorState {
  height: number
  width: number
  scale: number
  overlays: Overlay[]
  selectedOverlayId: string | null
}

const initialState: VideoEditorState = {
  height: 720,
  width: 1280,
  scale: 1,
  overlays: [],
  selectedOverlayId: null,
}

export const slice = createSlice({
  name: 'VideoEditorCanvas',
  initialState,
  reducers: {
    setCanvasScale(state, action: PayloadAction<number>) {
      state.scale = action.payload
    },
    addOverlay(state, action: PayloadAction<Overlay>) {
      state.overlays.push(action.payload)
    },
    changeOverlayTimeRange(
      state,
      action: PayloadAction<{ id: string; startTime: number; endTime: number }>
    ) {
      state.overlays = state.overlays.map((overlay) => {
        if (overlay.shape.id === action.payload.id) {
          return {
            ...overlay,
            startTime: action.payload.startTime,
            endTime: action.payload.endTime,
          }
        } else {
          return overlay
        }
      })
    },
    setSelectedOverlay(state, action: PayloadAction<string | null>) {
      state.selectedOverlayId = action.payload
    },
    changeOverlayShape(state, action: PayloadAction<OverlayShape>) {
      state.overlays = state.overlays.map((overlay) => {
        if (overlay.shape.id === action.payload.id) {
          return {
            ...overlay,
            shape: action.payload,
          }
        } else {
          return overlay
        }
      })
    },
    cleanCanvasState() {
      return initialState
    },
  },
})
