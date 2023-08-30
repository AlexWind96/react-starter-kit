import { PayloadAction, createAction, nanoid } from '@reduxjs/toolkit'
import { all, call, fork, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { selectVideo, videoEditorActions } from './index'

export const uploadVideoFile = createAction<File>('videoEditor/uploadVideoFile')

function* uploadVideoFileWorker(action: PayloadAction<File>) {
  const file = action.payload
  yield put(videoEditorActions.setVideoSrc(URL.createObjectURL(file)))
  yield put(videoEditorActions.setVideoFile(action.payload))
}

function* watchUploadVideoFileSaga() {
  yield takeLatest([uploadVideoFile.toString()], uploadVideoFileWorker)
}

export const uploadImageFile = createAction<File>('videoEditor/uploadImageFile')

const getImageDimensions = (url: string) => {
  return new Promise<{ width: number; height: number }>((resolve) => {
    const image = new Image()
    image.src = url
    image.onload = () => {
      resolve({
        height: image.height,
        width: image.width,
      })
    }
  })
}

function* uploadImageFileWorker(action: PayloadAction<File>) {
  const file = action.payload
  yield put(videoEditorActions.addImage(file))
  const url = URL.createObjectURL(file)
  const dimensions: { width: number; height: number } = yield call(getImageDimensions, url)
  const duration: number = yield select(selectVideo.duration)
  const id = nanoid(2)
  yield put(
    videoEditorActions.addOverlay({
      src: url,
      shape: {
        id,
        height: dimensions.height / 2,
        width: dimensions.width / 2,
        x: 40,
        y: 40,
      },
      startTime: 0,
      endTime: duration / 3,
    })
  )
  yield put(videoEditorActions.setSelectedOverlay(id))
}

function* watchUploadImageFileSaga() {
  yield takeEvery([uploadImageFile.toString()], uploadImageFileWorker)
}

export function* videoEditorSaga() {
  yield all([fork(watchUploadVideoFileSaga), fork(watchUploadImageFileSaga)])
}
