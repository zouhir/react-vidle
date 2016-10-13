// Play Control Icon
import React from 'react'

// ours
import IconPlay from './Play'
import IconReplay from './Replay'
import IconSpeed from './PlaySpeed'
import IconFullScreen from './FullScreen'
import Progress from './Progress'

const Controls = React.createClass({
  getDefaultProps () {
    return {
      width: 32,
      height: 32,
      playing: false
    }
  },
  render () {
    return (
      <div className='controls'>
        <div className='row transparent'>
          <div className='controls-left'>
            <IconPlay playing={true} />
            <IconReplay />
          </div>
          <div className='controls-right'>
            <IconSpeed />
            <IconFullScreen />
          </div>
        </div>
        <div className='row'>
          <Progress />
        </div>
      </div>
    )
  }
})

export default Controls
