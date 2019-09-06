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
        backgroundColor={this.props.bg || 'white'}
        color={this.props.color}
        alignItems="center"
        flexDirection={['column', 'row']}
        style={{
          marginBottom: rhythm(1.5),
          ...this.props.style,
        }}
        p={4}
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
        <Text textAlign={['left']} mr={[0, 4]} mb={[2, 0]}>
          <strong>Taylor Campbell</strong> lives in the woods of Virginia,
          travels with his family, and builds things with Rails and Javascript.
          (Check out{' '}
          <Link
            color={this.props.linkColor}
            href="https://projectpoll.co"
            target="_blank"
          >
            ProjectPoll
          </Link>
          !)
        </Text>
        <Flex flexDirection={['column']} width={[1, 'auto']}>
          <Flex justifyContent="left" alignItems={'center'} mb={1}>
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
      </Flex>
    )
  }
}

export default Bio
