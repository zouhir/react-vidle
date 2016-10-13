// theirs
import React from 'react'

// ours
import Controls from './controls/Controls'

const Vidle = React.createClass({
  componentDidMount () {

  },
  render () {
    return (
      <div className='vidle-player'>
        <video>
          <source src='https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4' type='video/mp4' />
        </video>
        <Controls />
      </div>
    )
  }
})

export default Vidle
