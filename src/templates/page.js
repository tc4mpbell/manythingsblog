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
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteBaseUrl = this.props.location.origin
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={`${post.frontmatter.title} | ${siteTitle}`}
          />

          <h1>{post.frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
      </>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      // html
      frontmatter {
        title
        published
        summary
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
