import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
import PropTypes from 'prop-types'
import Helmet from "react-helmet"
import { config } from "config"
import { rhythm } from "../utils/typography"

import Header from "../components/header"

import '../node_modules/react-mdl/extra/material.js';
import '../node_modules/react-mdl/extra/material.css';

export default class _Template extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

_Template.propTypes = {
  children: PropTypes.any
}