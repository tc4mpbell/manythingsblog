import React from 'react'
import { Image } from 'rebass'
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
    <Image src={forestPic} mb={3} />

    <p>
      <FaTree color="green" /> We live in a 1000sqft apartment in Ashland, VA,
      on 10 acres in the woods. I love the country,
    </p>
    <p>
      <FaHeart color="red" /> Anya is homeschooling Imogen and Ira -- it's been
      amazing. I can't claim much credit here, but we do some Code.org on
      Fridays 😎.
      <FaFemale color="blue" />
      <FaChild color="violet" />
      <FaChild color="gray" />
    </p>
    <p>
      <FaCode /> I'm building{' '}
      <a href="https://projectpoll.co" target="_blank">
        ProjectPoll
      </a>{' '}
      on nights &amp; weekends. <FaMoon color="lightgray" />
    </p>
    <p>
      <FaGem /> I work at a consulting company by day, doing Ruby on Rails and
      React.
    </p>
  </PageTemplate>
)

export default Now
