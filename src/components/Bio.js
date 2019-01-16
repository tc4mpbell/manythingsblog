import React from 'react'
import { FaTree, FaTwitter, FaEnvelope } from 'react-icons/fa'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Taylor Campbell`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
            borderRadius: '100%',
          }}
        />
        <div>
          <div>
            <strong>Taylor Campbell</strong> is building{' '}
            <a href="https://projectpoll.co" target="_blank">
              ProjectPoll
            </a>{' '}
            in the woods of Virginia <FaTree />
          </div>
          <div style={{ display: 'flexx', justifyContent: 'space-between' }}>
            <div>
              <FaTwitter />{' '}
              <a href="https://twitter.com/manythingsblue" target="_blank">
                @manythingsblue
              </a>
            </div>
            <div>
              <FaEnvelope />{' '}
              <a href="mailto:taylor@manythingsblue.com">
                taylor@manythingsblue.com
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio
