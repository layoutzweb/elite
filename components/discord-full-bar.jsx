import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class DiscordFullBar extends React.Component {
  render() {
    return (
        <div id="discord-app">
            <div>
                <div>
                    <div>
                        <p>
                            <a href="https://discordapp.com" target="_blank">
                                <img src="http://elitedangerouscobra.com.br/wp-content/themes/sparkling-elite/assets/images/discord-app-white-footer.png" />
                            </a>
                        </p>
                    </div>
                    <div>
                        <h3>Junte-se a nós utilizando o melhor e mais moderno comunicador disponível na web!</h3>
                        <p>Jé tem o Discord? <a href="https://discord.gg/0eieA6Pv0Z77oOke" target="_blank" title="Acesse o servido do Elite: Dangerous Cobra e venha jogar com a agente!">Clique aqui para acessar nosso servidor!</a></p>
                        <p>Ainda não conhece o Discord? Clique no link para ver um <a href="https://www.youtube.com/watch?v=aaxz5xthZC4" target="_blank" title="Como instalar e configurar o DiscordApp no seu PC!">tutorial sobre como instalar o Discord App!</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}




