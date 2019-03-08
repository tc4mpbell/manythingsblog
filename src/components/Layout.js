import React from 'react'
import { Link } from 'gatsby'

import { Flex, Box } from 'rebass'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    const colors = {
      blue: [
        '#e4f1f9',
        '#c6e1f3',
        '#a4cfec',
        '#7cbae4',
        '#49a0da',
        '#007acc',
        '#006eb8',
        '#0060a0',
        '#004f84',
        '#00385d',
      ],
      indigo: [
        '#e9ebfa',
        '#d2d5f6',
        '#b6bcf0',
        '#959de9',
        '#6773e0',
        '#0014cc',
        '#0012b7',
        '#000fa0',
        '#000c83',
        '#00095c',
      ],
      violet: [
        '#f0e9fa',
        '#e0d2f6',
        '#cdb6f0',
        '#b694e9',
        '#9767e0',
        '#5200cc',
        '#4a00b8',
        '#4000a1',
        '#350084',
        '#26005e',
      ],
      fuschia: [
        '#f9e9fa',
        '#f2d1f5',
        '#eab5f0',
        '#e193e9',
        '#d465e0',
        '#b800cc',
        '#a600b8',
        '#9200a1',
        '#790086',
        '#570060',
      ],
      pink: [
        '#fae9f3',
        '#f5d1e7',
        '#f0b6d8',
        '#e994c7',
        '#e066af',
        '#cc007a',
        '#b8006e',
        '#a20060',
        '#860050',
        '#61003a',
      ],
      red: [
        '#faeaeb',
        '#f6d2d6',
        '#f0b7bd',
        '#ea969e',
        '#e16974',
        '#cc0014',
        '#b80012',
        '#a2000f',
        '#86000d',
        '#610009',
      ],
      orange: [
        '#f9ede4',
        '#f3d9c7',
        '#edc2a5',
        '#e5a77d',
        '#db854b',
        '#cc5200',
        '#b84900',
        '#a04000',
        '#843500',
        '#5e2500',
      ],
      yellow: [
        '#f8f5de',
        '#f1ecba',
        '#e9e194',
        '#e1d569',
        '#d7c738',
        '#ccb800',
        '#b8a600',
        '#a19200',
        '#867900',
        '#605700',
      ],
      lime: [
        '#eef8df',
        '#dcf1bd',
        '#c8ea97',
        '#b2e16c',
        '#98d73b',
        '#7acc00',
        '#6eb800',
        '#60a200',
        '#508600',
        '#3a6100',
      ],
      green: [
        '#e6f9e3',
        '#caf3c5',
        '#aaeca3',
        '#85e47a',
        '#56da47',
        '#14cc00',
        '#12b800',
        '#0fa200',
        '#0d8600',
        '#096100',
      ],
      teal: [
        '#e3f9ec',
        '#c5f3d7',
        '#a2ecc0',
        '#79e4a4',
        '#46da81',
        '#00cc52',
        '#00b84a',
        '#00a241',
        '#008636',
        '#006127',
      ],
      cyan: [
        '#e3f9f7',
        '#c4f3ee',
        '#a0ece4',
        '#77e3d9',
        '#44d9cb',
        '#00ccb8',
        '#00b8a6',
        '#00a292',
        '#008679',
        '#006157',
      ],
    }
    if (location.pathname === rootPath) {
      header = (
        <>
          <Flex>
            <Box as="a" href="/" mr={3}>
              home
            </Box>
            <Box as="a" href="/about" mr={3}>
              about
            </Box>
            <Box as="a" href="/now" mr={3}>
              now
            </Box>
          </Flex>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
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
          </h1>
        </>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            // marginBottom: rhythm(-1),
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

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }

      return array
    }

    const randomColor = Object.keys(colors)[
      Math.floor(Math.random() * Object.keys(colors).length)
    ]

    return (
      <>
        <Flex width={1} justifyContent={'stretch'}>
          {colors[randomColor].map(color => (
            <div
              key={color}
              style={{ background: color, height: '3em', flex: 1 }}
            />
          ))}
        </Flex>

        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: ` ${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children}
        </div>
      </>
    )
  }
}

export default Layout
