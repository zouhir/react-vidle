// Play Control Icon
import React from 'react'

const IconPlay = React.createClass({
  getDefaultProps () {
    return {
      width: 32,
      height: 32,
      playing: false
    }
  },
  render () {
    if (this.props.playing === false) {
      return (
        <i>
          <svg fill='#FFFFFF' height={this.props.height} viewBox='0 0 24 24' width={this.props.width} xmlns='http://www.w3.org/2000/svg'>
            <path d='M8 5v14l11-7z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </svg>
        </i>
      )
    } else {
      return (
        <i>
          <svg fill='#FFFFFF' height={this.props.height} viewBox='0 0 24 24' width={this.props.width} xmlns='http://www.w3.org/2000/svg'>
            <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </svg>
        </i>
      )
    }
  }
})

export default IconPlay
