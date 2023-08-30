import { combineReducers } from '@reduxjs/toolkit'
import { canvasReducer } from './canvas'
import { dataReducer } from './data'
import { videoReducer } from './video'

export const videoEditorReducer = combineReducers({
  canvas: canvasReducer,
  data: dataReducer,
  video: videoReducer,
})
