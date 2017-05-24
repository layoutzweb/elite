import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Community extends React.Component {
  render() {
    return (
        <div className="index-section">
            <div>
                <img src="http://dev-elitedangerouscobra.com.br/wp-content/themes/sparkling-elite/assets/images/elite/community-image-elite-dangerous-cobra-brasil-final.png" alt="shipyard-elite-dangerous-cobra-brasil-final" width="100%" />
            </div>
            <div>
                <h2>Comunidade</h2>
                <h3>Se você é daqueles que gostam de interagir com a comunidade, fique tranquilo, a comunidade brasileira só cresce!</h3>
                <p>Desde o lançamento do Elite: Dangerous a comunidade brasileira se mostrava presente no universo Elite, com websites, foruns e fan pages brasileiras brasileiras dedicadas a lhe trazer novidades e diversão. Com diversas ferramentas criadas e mantidas por dedicados membros da comunidade brasileira, o que não vai faltar é ajuda para começar sua carreira de piloto no Elite: Dangerous!</p>
                <div>
                    <a href="http://dev-elitedangerouscobra.com.br/shipyard/">Continue lendo</a>
                </div>
            </div>
        </div>
    )
  }
}