/**
 * Credits to PayPal's Accessible HTML5 Video Player
 * https://github.com/paypal/accessible-html5-video-playerss
 */
export default toHumanTime

/**
 * Gets human readable time from seconds
 * @param {number} seconds
 * @returns {string} 'hh:mm:ss'
 */
function toHumanTime (seconds) {
  let hh = 0
  let mm = 0
  let ss = 0
  let t = ''

  if (seconds > 0) {
    // Multiply by 1000 because Date() requires miliseconds
    var date = new Date(seconds * 1000)
    hh = date.getUTCHours()
    mm = date.getUTCMinutes()
    ss = date.getSeconds()
  }

  // Make sure there are two-digits
  if (hh !== 0) {
    if (hh < 10) {
      t += '0' + hh + ':'
    } else {
      t += hh + ':'
    }
  }
  if (mm < 10) {
    t += '0' + mm + ':'
  } else {
    t += mm + ':'
  }
  if (ss < 10) {
    t += '0' + ss
  } else {
    t += ss
  }
  return t
}
