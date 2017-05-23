import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'

import Ratings from "../components/index/ratings"
import ChangeGalaxy from "../components/index/change-galaxy"
import PlayYourWay from "../components/index/play-your-way"

export default class Index extends React.Component {
  render() {
    return (
      <div className="index-page">
        <div className="index-main-title">
          <h1 className="page-title text-center">Elite: Dangerous</h1>
          <h2 className="text-center hidden-xs hidden-sm">
            Lute para se destacar em<br/> uma galáxia imensa e sem piedade!
          </h2>
          <p className="text-center visible-lg"> 
            <strong>Elite: Dangerous</strong> é um MMO espacial imenso com aproximadamente 400 Bilhões de sistemas esperando para serem visitados por você. Inicie sua carreira de comandante com uma pequena nave e alguns créditos e lute para se destacar dentre os ranks do Elite: Dangerous.
          </p>
        </div>
        <Ratings />
        <ChangeGalaxy />
        <PlayYourWay />
      </div>
    )
  }
}
