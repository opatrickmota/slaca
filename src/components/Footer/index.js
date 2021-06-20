import React from 'react'

import {
    Footer,
    Logo,
    TextFooter
} from './styles'

import Paragraph from '../Paragraph'
import Strong from '../TextStrong'

export default function FooterComponent(){
    return(
        <Footer>
            <Logo>
                <h1>Galoá</h1>
                <span>anais e proceedings</span>
                <button>Saiba mais</button>
            </Logo>
            <TextFooter>
                <Paragraph fontSize="16px">
                    <Strong>Preservar a memória do evento e ampliar o acesso ao conhecimento científico </Strong>
                    gerado em eventos é a razão de ser da plataforma Galoá Proceedings.
                </Paragraph>
                <Paragraph fontSize="16px" marginTop="20px">
                    Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda comunidade científica, 
                    mantendo aceso o debate científico fornecido pelos encontros e aumentando o impacto do evento.
                </Paragraph>
            </TextFooter>
        </Footer>
    )
}