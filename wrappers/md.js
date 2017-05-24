import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { config } from 'config'

import 'css/markdown-styles.css'

export default class Md extends React.Component {
  render() {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}

Md.propTypes = {
  router: PropTypes.object
}