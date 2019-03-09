import React from 'react'
import { Flex, Text, Box, Image } from 'rebass'
import { FaTree, FaTwitter, FaEnvelope } from 'react-icons/fa'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <Flex
        flexDirection={['column', 'row']}
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        {/* <Box
          as="img"
          width={50}
          height={50}
          display={['none', 'block']}
          src={profilePic}
          alt={`Taylor Campbell`}
          style={{
            marginRight: rhythm(1 / 2),
            // marginBottom: 0,
            // width: rhythm(3),
            // height: rhythm(3),
            borderRadius: '100%',
          }}
        /> */}
        <Text textAlign={['centerx', 'left']}>
          <strong>Taylor Campbell</strong> is building{' '}
          <a href="https://projectpoll.co" target="_blank">
            ProjectPoll
          </a>{' '}
          in the woods of Virginia <FaTree />
          <Flex flexDirection={['column']}>
            <Flex alignItems="center">
              <Box as={FaEnvelope} mr={1} color="lightBlue" />
              <a href="mailto:taylor@manythingsblue.com">
                taylor@manythingsblue.com
              </a>
            </Flex>
            <Flex alignItems="center">
              <Box as={FaTwitter} mr={1} color="lightBlue" />
              <a href="https://twitter.com/manythingsblue" target="_blank">
                @manythingsblue
              </a>{' '}
            </Flex>
          </Flex>
        </Text>
      </Flex>
    )
  }
}

export default Bio
