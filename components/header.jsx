import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from './../config' 
import { rhythm } from "../utils/typography"

export default class Header extends React.Component {
  render() {
    return (
      <div
            style={{
            background: `rebeccapurple`,
            marginBottom: rhythm(1),
            }}
        >
            <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            }}
            >
            <h1 style={{ margin: 0 }}>
                <Link
                to={prefixLink("/")}
                style={{
                    color: "white",
                    textDecoration: "none",
                }}
                >
                Gatsby
                </Link>
            </h1>
            </div>
        </div>
    )
  }
}