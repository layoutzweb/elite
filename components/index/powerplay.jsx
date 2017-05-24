import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Powerplay extends React.Component {
  render() {
    return (
      <div className="index-section">
        <div>
            <div>
                <img src="http://dev-elitedangerouscobra.com.br/wp-content/themes/sparkling-elite/assets/images/elite/powerplay-image-elite-dangerous-cobra-brasil-final.png" alt="powerplay-petrous" width="100%" />
            </div>
            <div>
                <h2>POWERPLAY</h2>
                <h3>Uma batalha contínua pela conquista interestelar</h3>
                <p><strong>POWERPLAY</strong> é uma batalha contínua pela conquista interestelar que afeta todo e qualquer aspecto da experiência de quem joga Elite: Dangerous. Alie-se a um Poder galáctico e ganhe bonus valiosos e vantagens em troca, influencie nas estratégias e dominem o universo juntos.</p>
                <div>
                    <a href="http://dev-elitedangerouscobra.com.br/powerplay/">Continue lendo</a>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

