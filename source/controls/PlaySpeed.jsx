// Play Control Icon
import React from 'react'

const IconSpeed = React.createClass({
  getDefaultProps () {
    return {
      width: 32,
      height: 32,
      speed: 1
    }
  },
  render () {
    return (
      <i>
        <div className='square-select'>
          {this.props.speed}X
        </div>
        <ul className='select'>
          <li>1.5X</li>
          <li>2X</li>
          <li>3X</li>
        </ul>
      </i>
    )
  }
})

export default IconSpeed
