import React from 'react'
import { Link } from 'react-router'

export default class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div>
                <div>
                    <nav></nav>
                </div>
                <div>
                    <div>
                        <div></div>
                        <div>
                            <p>Elite: Dangerous Cobra Brasil was created using assets and imagery from Elite: Dangerous, with the permission of Frontier Developments plc, for non-commercial purposes. It is not endorsed by nor reflects the views or opinions of Frontier Developments and no employee of Frontier Developments was involved in the making of it.</p>
                            <p> Elite: Dangerous Cobra Brasil foi criado usando arquivos e imagens do Elite: Dangerous, com a permissão da Frontier Developments plc, para fins não comerciais. Ele não é recomendada nem reflete as opiniões ou pareceres de Frontier Developments e nenhum funcionário da Frontier Developments estava envolvido na elaboração do mesmo.</p>
                            <a href="http://elitedangerouscobra.com.br/" title="Elite Dangerous Cobra">Elite Dangerous Cobra Brasil</a>  Todos os direitos reservados. <a href="http://jmilanes.ninja" target="_blank">Desenvolvido por Jair Milanes Junior</a>
                        </div>
                    </div>
                </div>
                <div style={{display: `block`}}>
                    <i></i>
                </div>
            </div>
        </footer>
    )
  }
}