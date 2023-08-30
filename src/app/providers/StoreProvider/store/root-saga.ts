import { all, fork } from 'redux-saga/effects'
import { videoEditorSaga } from '@features/video-editor'

export default function* rootSaga() {
  yield all([fork(videoEditorSaga)])
}
