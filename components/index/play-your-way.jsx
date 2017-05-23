import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class PlayYourWay extends React.Component {
  render() {
    return (
        <div className="index-section">
            <div>
                <div>
                    <img src="http://dev-elitedangerouscobra.com.br/wp-content/themes/sparkling-elite/assets/images/elite/galaxy-image-elite-dangerous-cobra-brasil-final.png" alt="living-game" width="100%" />
                </div>
                <div>
                    <h2>Jogue da sua maneira</h2>
                    <h3>400 “bilhões” de sistemas estelares lhe dão liberdade infinita para trilhar seu próprio caminho!</h3>
                    <p>Como um novo membro da Pilots Federation (<a href="http://elitedangerouscobra.com.br/pilots-federation/" title="Saiba sobra a Federação de Pilotos (Pilots Federation)">Federação de Pilotos</a>) faça o uqe tiver que fazer para adquirir habilidades, conhecimento, riqueza e poder para se destacar dentre os rankings da Elite. Viaje pela galáxia passando por <a href="http://elitedangerouscobra.com.br/estacoes/" title="Estações - Elite: Dangerous">estações</a> gigantescas onde você pode comprar e vender mercadorias, comprar, manter e vender suas naves, comprar novos módulos, re-abastecer e efetuar reparos, além de se manter atualizado com as últimas notícias da galáxia com a Galnet News.</p>
                </div>
            </div>
        </div>
    )
  }
}