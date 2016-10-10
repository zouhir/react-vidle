// theirs
import React from 'react'

// ours
import IconPlay from './controls/play'

const Vidle = React.createClass({
  componentDidMount () {

  },
  render () {
    return (
      <div className='vidle-player'>
        <video>
          <source src='https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4' type='video/mp4' />
        </video>
        <div className='controls'>
          <div className='row'>
            <IconPlay playing={true} />
          </div>
          <div className='row'>
          </div>
        </div>
      </div>
    )
  }
})

export default Vidle
