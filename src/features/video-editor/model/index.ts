import { canvasAC, selectCanvas } from './canvas'
import { dataAC, selectData } from './data'
import { uploadImageFile, uploadVideoFile, videoEditorSaga } from './sagas'
import { selectVideo, videoAC } from './video'

export const videoEditorActions = {
  ...canvasAC,
  ...dataAC,
  ...videoAC,
  uploadVideoFile,
  uploadImageFile,
}

export { videoEditorReducer } from './reducers'

export { videoEditorSaga }

export { selectCanvas, selectData, selectVideo }
