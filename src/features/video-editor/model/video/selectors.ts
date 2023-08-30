import { createSelector } from '@reduxjs/toolkit'

export const isPlaying = (state: RootState) => state.videoEditor.video.isPlaying
export const duration = (state: RootState) => state.videoEditor.video.duration
export const muted = (state: RootState) => state.videoEditor.video.muted
export const volume = (state: RootState) => state.videoEditor.video.volume
export const time = (state: RootState) => state.videoEditor.video.time
export const src = (state: RootState) => state.videoEditor.video.src
export const state = (state: RootState) => state.videoEditor.video
export const start = (state: RootState) => state.videoEditor.video.start
export const isEnded = (state: RootState) => state.videoEditor.video.isEnded
export const end = (state: RootState) => state.videoEditor.video.end
export const isLoaded = (state: RootState) => state.videoEditor.video.isLoaded
export const dimensions = (state: RootState) => state.videoEditor.video.dimensions

export const durationObj = createSelector(duration, (duration) => {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = Math.floor(duration % 60)
  return { hours, minutes, seconds }
})

export const formattedDuration = createSelector(durationObj, (durationObj) => {
  const hours = durationObj.hours > 0 ? `${durationObj.hours}:` : ''
  const minutes = durationObj.minutes > 0 ? `${durationObj.minutes}:` : '0:'
  const seconds = durationObj.seconds < 10 ? `0${durationObj.seconds}` : `${durationObj.seconds}`
  return `${hours}${minutes}${seconds}`
})

export const timeObj = createSelector(time, (timeObj) => {
  const hours = Math.floor(timeObj / 3600)
  const minutes = Math.floor((timeObj % 3600) / 60)
  const seconds = Math.floor(timeObj % 60)
  return { hours, minutes, seconds }
})

export const formattedTime = createSelector(timeObj, (timeObj) => {
  const hours = timeObj.hours > 0 ? `${timeObj.hours}:` : ''
  const minutes = timeObj.minutes > 0 ? `${timeObj.minutes}:` : '0:'
  const seconds = timeObj.seconds < 10 ? `0${timeObj.seconds}` : `${timeObj.seconds}`
  return `${hours}${minutes}${seconds}`
})
