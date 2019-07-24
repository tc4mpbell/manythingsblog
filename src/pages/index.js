import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box } from 'rebass'

import Bio from '../components/Bio'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import { randomColors } from '../utils/colors'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges.filter(
      post => post.node.frontmatter.published
    )
    const colors = randomColors()

    return (
      <Layout colors={colors} location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <Bio
          color={colors[9]}
          style={{
            border: `solid 4px ${colors[3]}`,
            background: colors[440],
          }}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const summary = node.frontmatter.summary || node.excerpt
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {/* <Img
                    sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                    style={{ maxHeight: 100, marginBottom: rhythm(1 / 4) }}
                  /> */}
                  {title}
                </Link>
              </h3>

              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            published
            summary
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
