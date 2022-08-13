import React from 'react'
import { Link } from 'gatsby'

import { Flex, Box, Text } from 'rebass'

import { rhythm, scale } from '../utils/typography'
import { randomColors } from '../utils/colors'

class Layout extends React.Component {
  render() {
    const { location, title, children, maxWidth } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const colors = this.props.colors || randomColors()

    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: 10,
            marginTop: 0,
          }}
        >
          <Text color={'black'}>{title}</Text>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: rhythm(0.5),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }

    const nav = (
      <Flex style={{ backgroundColor: '#333', display: 'inline-flex' }}>
        <Box as="a" color="white" href="/" px={3} py={1} fontWeight="bold">
          home
        </Box>
      </Flex>
    )

    return (
      <>
        <Flex
          width={1}
          justifyContent={'stretch'}
          style={{ height: '3em', zIndex: '-1' }}
        >
          {colors.map(color => (
            <Box
              key={color}
              style={{
                background: color,
                height: '20em',
                flex: 1,
                transition: '1s',
              }}
              onMouseEnter={e => {
                // e.target.style.height = '12em'
              }}
              onMouseLeave={e => {
                // e.target.style.height = '14em'
              }}
            />
          ))}
        </Flex>

        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            maxWidth: `${maxWidth || rhythm(24)}`,
            padding: ` ${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {nav}
          {header}
          {children}
        </div>
      </>
    )
  }
}

export default Layout
