/* eslint-env mocha */

// theirs
import { expect } from 'chai'
// ours
import toHumanTime from '../source/utils/time'

describe('Time util', () => {
  it('Should convert seconds to hh:mm:ss', () => {
    expect(toHumanTime(0)).to.equal('00:00')
    expect(toHumanTime(1)).to.equal('00:01')
    expect(toHumanTime(61)).to.equal('01:01')
    expect(toHumanTime(3600)).to.equal('01:00:00')
    expect(toHumanTime(3661)).to.equal('01:01:01')
  })
})
