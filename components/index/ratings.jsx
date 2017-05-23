import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Ratings extends React.Component {
  render() {
    return (
      <div className="index-section">
          <div>
              <div>
                  <div className="ratings-block"> 
                      <strong>8/10</strong>
                      <h2>Edge Magazine</h2>
                      <p>“Uma jogabilidade satisfatória que apresenta um novo padrão para qualquer jogo de cockpit futuro.”</p>
                    </div>
                </div>
            <div>
                <div className="ratings-block"> 
                    <strong>4/5</strong>
                    <h2>The Guardian</h2>
                    <p>“Vasto, Lindo e Entimidante.”</p>
                </div>
            </div>
            <div>
                <div className="ratings-block"> 
                    <strong>86%</strong>
                    <h2>PC Gamer</h2>
                    <p>“Capaz de entregar as melhores histórias sobre naves espaciais que você poderá participar.”</p>
                </div>
            </div>
            <div>
                <div className="ratings-block"> 
                    <strong>8/10</strong>
                    <h2>Eurogamer</h2>
                    <p>“Eu me apaixonei mais uma vez pelo Elite.”</p>
                </div>
            </div>
        </div>
    </div>
    )
  }
}