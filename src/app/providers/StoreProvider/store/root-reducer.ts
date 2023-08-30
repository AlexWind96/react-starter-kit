import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { themeSliceReducer } from '@entities/theme'
import { videoEditorReducer } from '@features/video-editor'

export const rootReducer = combineReducers({
  theme: persistReducer(
    {
      key: 'theme',
      storage,
    },
    themeSliceReducer
  ),
  videoEditor: videoEditorReducer,
})
