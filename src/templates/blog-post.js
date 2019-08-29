import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import { Flex, Text } from 'rebass'

import Bio from '../components/Bio'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { randomColors } from '../utils/colors'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteBaseUrl = this.props.location.origin
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const colors = randomColors()

    const twitterMeta = [
      {
        name: 'twitter:card',
        content: `summary_large_image`,
      },
      {
        name: 'twitter:title',
        content: post.frontmatter.title,
      },
      {
        name: 'twitter:description',
        content: post.frontmatter.summary,
      },
      {
        name: 'twitter:site',
        content: `@manythingsblue`,
      },
    ]

    if (post.frontmatter.featuredImage) {
      twitterMeta.push({
        name: 'twitter:image',
        content: `${siteBaseUrl}${post.frontmatter.featuredImage.childImageSharp.sizes.src}`,
      })
    }

    return (
      <>
        <Layout
          colors={colors}
          location={this.props.location}
          title={siteTitle}
        >
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[
              { name: 'description', content: siteDescription },
              ...twitterMeta,
            ]}
            title={`${post.frontmatter.title} | ${siteTitle}`}
          />

          {post.frontmatter.featuredImage && (
            <>
              <div
                style={{
                  width: '100%',
                  // left: 0,
                  height: 200,
                  boxShadow: '0 0 1px #000',
                  background: `url(${post.frontmatter.featuredImage.childImageSharp.sizes.src}) 0 0px no-repeat`,
                  backgroundSize: 'cover',
                }}
              />
              {post.frontmatter.imageCredit && (
                <em>{post.frontmatter.imageCredit}</em>
              )}
            </>
          )}

          <h1>
            <Flex justifyContent="space-betweenx" alignItems="center">
              <Text color={colors[6]}>
                {post.frontmatter.titleLink && (
                  <a
                    style={{ boxShadow: 'none', textDecoration: 'none' }}
                    href={post.frontmatter.titleLink}
                    target="_blank"
                  >
                    ⭐️ {post.frontmatter.title}
                  </a>
                )}
                {!post.frontmatter.titleLink && post.frontmatter.title}
              </Text>
            </Flex>
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          {post.frontmatter.summary && (
            <p
              style={{
                fontSize: '120%',
                border: 'solid 2px #ddd',
                padding: '1em',
                fontStyle: 'italic',
              }}
            >
              {post.frontmatter.summary}
            </p>
          )}

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio
            color={colors[9]}
            style={{ border: `solid 10px ${colors[7]}` }}
          />

          {(next || previous) && (
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          )}
          {!previous && !next && <Link to="/">← Blog</Link>}
        </Layout>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        titleLink
        published
        summary
        date(formatString: "MMMM DD, YYYY")
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
`
