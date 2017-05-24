import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Horizons extends React.Component {
  render() {
    return (
        <div className="index-section">
            <div>
                <div>
                    <img src="http://dev-elitedangerouscobra.com.br/wp-content/themes/sparkling-elite/assets/images/elite/horizons-image-elite-dangerous-cobra-brasil-final.png" alt="living-game" width="100%" />
                </div>
                <div>
                    <h2>Uma nova temporada de atualizações</h2>
                    <h3>Enriquecendo a experiência do Elite: Dangerous com novas atividades e maneiras de se jogas.</h3>
                    <p>Elite Dangerous: Horizons é uma nova temporada de grandes atualizações para a galáxia imensa e conectada do Elite: Dangerous. Começando agora com o Planetary Landings (pouso em planetas), Loot &amp; Crafting (encontrar e desenvolver novos materiais e módulos), Multi-crew, Commander criator (criação de avatares) e muito mais a caminho.</p>
                </div>
            </div>
        </div>
    )
  }
}