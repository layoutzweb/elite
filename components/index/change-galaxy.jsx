import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class ChangeGalaxy extends React.Component {
  render() {
    return (
      <div className="index-section">
        <div>
            <div>
                <img src="http://dev-elitedangerouscobra.com.br/wp-content/themes/sparkling-elite/assets/images/elite/transform-image-elite-dangerous-cobra-brasil-final.png" alt="living-game" width="100%"/>
            </div>
            <div>
                <h2>Suas ações transformam a Galáxia</h2>
                <h3>A Galáxia enriquece sua experiência!</h3>
                <p>Trilhe seu caminho em uma versão futurística e cruel da Via Láctea, comandada por superpoderes galácticos e repleta de incríveis oportunidades. Todas as ações dos jogadores impactam diretamente na mecânica política, estas ações podem causar a queda de governos, iniciar ou acabar com imensas batalhas, tudo isso enquanto a fronteira da humanidade cresce.</p>
            </div>
        </div>
    </div>
    )
  }
}

