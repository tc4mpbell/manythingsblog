import React from 'react'
import Helmet from 'react-helmet'

import { Image, Flex, Box } from 'rebass'
import PageTemplate from '../templates/page'
import Bio from '../components/Bio'

import forestPic from '../assets/forest.jpg'
import {
  FaHeart,
  FaMoon,
  FaFemale,
  FaChild,
  FaCode,
  FaTree,
  FaGem,
} from 'react-icons/fa'

const Now = () => (
  <PageTemplate title="Currently">
    <Helmet></Helmet>

    <Flex>
      <Box width={1}>
        <Image src={forestPic} mb={3} />
        <p>
          <FaTree color="green" /> We live in a 1000sqft apartment in Ashland,
          VA, on 10 acres in the woods. Optimizing for freedom to explore over
          luxury housing :).
        </p>
        <p>
          <FaHeart color="red" /> We're homeschooling our kids -- it's been
          amazing.
        </p>
        <p>
          <FaCode /> I'm building{' '}
          <a href="https://projectpoll.co" target="_blank">
            ProjectPoll
          </a>{' '}
          on nights &amp; weekends. <FaMoon color="lightgray" />
        </p>
        <p>
          <FaGem /> I work at a consulting company by day, doing Ruby on Rails
          and React.
        </p>
      </Box>
    </Flex>
  </PageTemplate>
)

export default Now
