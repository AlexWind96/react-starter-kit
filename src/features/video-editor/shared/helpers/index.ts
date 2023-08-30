export const getFormattedTime = (time: number) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor(time % 60)

  const hoursStr = hours > 0 ? `${hours}:` : ''
  const minutesStr = minutes > 0 ? `${minutes}:` : '00:'
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${hoursStr}${minutesStr}${secondsStr}`
}
const getDecimalNumber = (number) => {
  const decimalPart = Math.abs(number % 1)
  return Math.floor(decimalPart * 10)
}
export const getFormattedTimeWithMls = (time: number) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor(time % 60)

  const hoursStr = hours > 0 ? `${hours}:` : ''
  const minutesStr = minutes > 0 ? `${minutes}:` : '00:'
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`
  const millisecondsStr = `.${getDecimalNumber(time)}`
  return `${hoursStr}${minutesStr}${secondsStr}${millisecondsStr}`
}

export const getSliderMarks = (duration: number) => {
  console.log(duration)
  const interval = Math.round(duration) / 10
  return new Array(10)
    .fill('')
    .map((_, index) => {
      return interval * index
    })
    .map((i) => {
      return {
        value: i,
        label: getFormattedTime(i),
      }
    })
}

export const formatTime = (ms: number): string => {
  const padZero = (num: number): string => {
    return num.toString().padStart(2, '0')
  }
  const hours = Math.floor(ms / 3600000)
  const minutes = Math.floor((ms % 3600000) / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
}
