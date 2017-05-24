import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Powerplay extends React.Component {
  render() {
    return (
      <div className="index-section">
        <div>
            <div>
                <img src="http://dev-elitedangerouscobra.com.br/wp-content/themes/sparkling-elite/assets/images/elite/cqc-image-elite-dangerous-cobra-brasil-final.png" alt="living-game" width="100%" />
            </div>
            <div>
                <h2>CQC Championship (PVP)</h2>
                <h3>Modo multiplayer rápido e viciante</h3>
                <p>Equipe sua nave preferida com diferentes módulos de defesa e artilharias e enfrente adversários de todo o mundo em um modo multiplayer rápido e viciante dentro arenas criadas para tornar esta experência ainda mais incrível.</p>
                <div>
                    <a href="http://dev-elitedangerouscobra.com.br/cqc-close-quaters-combat/">Continue lendo</a>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
