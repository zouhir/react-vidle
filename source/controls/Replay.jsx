// Play Control Icon
import React from 'react'

const IconReplay = React.createClass({
  getDefaultProps () {
    return {
      width: 28,
      height: 28,
      seconds: 8
    }
  },
  render () {
    return (
      <i className={this.props.direction}>
        <svg fill='#FFFFFF' height={this.props.height} viewBox='0 0 24 24' width={this.props.width} xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z' />
        </svg>
      </i>
    )
  }
})

export default IconReplay
