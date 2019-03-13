import React from 'react'
import { Flex, Text, Box, Image, Link } from 'rebass'
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
        bg={this.props.bg}
        color={this.props.color}
        flexDirection={['column', 'row']}
        style={{
          marginBottom: rhythm(2.5),
          ...this.props.style,
        }}
        p={3}
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
          <Link
            color={this.props.linkColor}
            href="https://projectpoll.co"
            target="_blank"
          >
            ProjectPoll
          </Link>{' '}
          in the woods of Virginia <FaTree />
          <Flex flexDirection={['column']}>
            <Flex alignItems="center">
              <Box as={FaEnvelope} mr={1} color="lightBlue" />
              <Link
                color={this.props.linkColor}
                href="mailto:taylor@manythingsblue.com"
              >
                taylor@manythingsblue.com
              </Link>
            </Flex>
            <Flex alignItems="center">
              <Box as={FaTwitter} mr={1} color="lightBlue" />
              <Link
                color={this.props.linkColor}
                href="https://twitter.com/manythingsblue"
                target="_blank"
              >
                @manythingsblue
              </Link>{' '}
            </Flex>
          </Flex>
        </Text>
      </Flex>
    )
  }
}

export default Bio
