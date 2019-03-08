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
      <FaTree color="green" /> Living in the woods in Ashland, VA.
    </p>
    <p>
      <FaHeart color="red" /> Hanging out with with Anya, Imogen, and Ira.
      <FaFemale color="blue" />
      <FaChild color="violet" />
      <FaChild color="gray" />
    </p>
    <p>
      <FaCode /> Building{' '}
      <a href="https://projectpoll.co" target="_blank">
        ProjectPoll
      </a>{' '}
      on nights &amp; weekends. <FaMoon color="lightgray" />
    </p>
    <p>
      <FaGem /> Writing Ruby on Rails by day.
    </p>
  </PageTemplate>
)

export default Now
