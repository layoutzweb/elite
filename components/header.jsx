import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from './../config' 
import { rhythm } from "../utils/typography"

export default class Header extends React.Component {
  render() {
    return (
      <header>
            <div>
                <h1>
                    <Link to={prefixLink("/")}>Gatsby</Link>
                </h1>
            </div>
        </header>
    )
  }
}