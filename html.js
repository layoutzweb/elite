import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'react-typography'
import typography from './utils/typography'
import { Layout } from 'react-mdl/lib/Layout'  

const BUILD_TIME = new Date().getTime()

export default class Html extends React.Component {
  render() {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!./public/styles.css'),
          }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <script src="https://unpkg.com/dialog-polyfill/dialog-polyfill.js"></script>
          <link rel="stylesheet" type="text/css" href="https://unpkg.com/dialog-polyfill/dialog-polyfill.css" />
          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body>
          <Layout>
            <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }}/>
          </Layout>
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: PropTypes.string
}