import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface VideoEditorState {
  video: File | null
  images: File[]
}

const initialState: VideoEditorState = {
  video: null,
  images: [],
}

export const slice = createSlice({
  name: 'VideoEditorData',
  initialState,
  reducers: {
    setVideoFile(state, action: PayloadAction<File>) {
      state.video = action.payload
    },
    addImage(state, action: PayloadAction<File>) {
      state.images.push(action.payload)
    },
    cleanDataState() {
      return initialState
    },
  },
})
