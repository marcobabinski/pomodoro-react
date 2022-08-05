function padZero(str, len = 2) {
  let result = String(str);
  for (let i = 0; i < len - String(str).length; i++) {
    result = "0" +result;
  }
  return result;
}

function secondsToTime(seconds = 0) {
  let hours, minutes

  hours = Math.floor(seconds / 3600)
  seconds = seconds % 3600

  minutes = Math.floor(seconds / 60)
  seconds = seconds % 60

  if (hours > 0) return [hours, padZero(minutes), padZero(seconds)]
  return [padZero(minutes), padZero(seconds)]
}

function clamp(val, min, max) {
  if (val > max) return max
  if (val < min) return min
  return val
}

function pickRandom(arr = []) {
  let size = arr.length
  let choice = Math.round(Math.random() * (size - 1))
  return arr[choice]
}

export { secondsToTime, padZero, clamp, pickRandom }