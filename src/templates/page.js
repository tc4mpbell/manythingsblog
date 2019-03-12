import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import { Text } from 'rebass'

import Bio from '../components/Bio'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { randomColors } from '../utils/colors'

class PageTemplate extends React.Component {
  render() {
    const colors = randomColors()
    const { title, children } = this.props

    let loc = {}
    if (typeof window !== `undefined`) {
      loc = window.location
    }

    return (
      <Layout colors={colors} location={loc}>
        <Helmet htmlAttributes={{ lang: 'en' }} title={'manythingsblue'} />

        <h1>
          <Text color={colors[6]}>{title}</Text>
        </h1>

        {children}
      </Layout>
    )
  }
}

export default PageTemplate
