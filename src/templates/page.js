import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import { Flex } from 'rebass'

import Bio from '../components/Bio'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'

class PageTemplate extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <Layout>
        <Helmet htmlAttributes={{ lang: 'en' }} title={'manythingsblue'} />

        <h1>{title}</h1>

        {children}
      </Layout>
    )
  }
}

export default PageTemplate
