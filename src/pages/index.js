import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Flex, Text, Link as A } from 'rebass'
import { FaEnvelope } from 'react-icons/fa'

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
      <Layout
        colors={colors}
        location={this.props.location}
        title={siteTitle}
        maxWidth={rhythm(36)}
      >
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <Bio
          color={colors[9]}
          style={{
            border: `solid 4px ${colors[3]}`,
            marginBottom: 0,
          }}
        />
        <Flex flexDirection={['column', 'row']}>
          <Box flex={1}>
            <h2>manythingsblog</h2>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const summary = node.frontmatter.summary || node.excerpt
              return (
                <div key={node.fields.slug}>
                  <strong
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
                  </strong>
                  <br />

                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: summary }} />
                </div>
              )
            })}
          </Box>
          <Box width={[1, 1 / 2]} ml={5}>
            <h2>current projects</h2>
            <Box backgroundColor={colors[0]} p={4}>
              <A href="https://projectpoll.co" fontSize={20} target="_blank">
                ProjectPoll
              </A>
              <Text>Track team happiness with anonymous surveys.</Text>
              <small>Sep 2018 - present</small>
            </Box>

            <h2>experiments & randomness</h2>
            <Box backgroundColor={colors[8]} color={'white'} p={4} mb={3}>
              <A href="/maybe.codes/" color={colors[0]} fontSize={20}>
                maybe.codes
              </A>{' '}
              (landing page)
              <Text>Simple screening questions for tech job applicants.</Text>
              <small>Aug 2019</small>
            </Box>
            <Box backgroundColor={colors[9]} color={'white'} p={4} mb={3}>
              <A href="/gamemaker-react/" color={colors[0]} fontSize={20}>
                Card-based Game Creator
              </A>{' '}
              (videos!)
              <Text>
                100 cards. 6 buttons. What else could you need? Rebuilding the
                best game-creation tool of my youth in React. Recording it all
                (badly).
              </Text>
              <small>Sep 2019</small>
            </Box>

            <Flex alignItems="baseline" justifyContent="space-between">
              <h2>old project graveyard</h2>
              <Text mb={3}>2007 - 2011</Text>
            </Flex>
            <Text mb={2}>My first products 😍.</Text>

            <Box
              backgroundColor={'#888'}
              color={colors[0]}
              p={3}
              mb={3}
              fontSize={14}
            >
              <Text fontSize={18} mb={2}>
                Coupley
              </Text>
              <Text>Journaling app for couples.</Text>
              <Text>Web / Ruby on Rails</Text>
            </Box>
            <Box
              backgroundColor={'#888'}
              color={colors[0]}
              p={3}
              mb={3}
              fontSize={14}
            >
              <Text fontSize={18} mb={2}>
                Storyblue
              </Text>
              <Text>Plan and write your novel.</Text>
              <Text>Mac/Windows / Adobe Flex</Text>
            </Box>
            <Box
              backgroundColor={'#888'}
              color={colors[0]}
              p={3}
              mb={3}
              fontSize={14}
            >
              <Text fontSize={18} mb={2}>
                Photographerblue
              </Text>
              <Text>Marketplace for wedding photographers.</Text>
              <Text>Web / Ruby on Rails</Text>
            </Box>
            <Box
              backgroundColor={'#888'}
              color={colors[0]}
              p={3}
              mb={3}
              fontSize={14}
            >
              <Text fontSize={18} mb={2}>
                NovelPlanner
              </Text>
              <Text>Plan and write your novel.</Text>
              <Text>Windows / .NET 2.0</Text>
            </Box>
          </Box>
        </Flex>

        <Flex justifyContent="center" alignItems={'center'} my={4}>
          <Box as={FaEnvelope} mr={1} color="lightBlue" />
          <a href="mailto:taylor@manythingsblue.com">
            taylor@manythingsblue.com
          </a>
        </Flex>
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
