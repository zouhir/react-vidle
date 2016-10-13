// Play Control Icon
import React from 'react'

const Progress = React.createClass({
  getDefaultProps () {
    return {
      width: 32,
      height: 32,
      current: 22,
      buffer: 44
    }
  },
  render () {
    return (
      <div className='progress-bar'>
        <span className='buffer' />
        <span className='progress' />
      </div>
    )
  }
})

export default Progress
