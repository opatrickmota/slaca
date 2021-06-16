import React from 'react'

import {
    Container,
    SectionLeft,
    HeaderLogo,
    Listas,
    ListaItem,
    ActiveItem,
    SectionRight,
    HeaderSectionRight,
    ContainerSectionRight,
    Titles,
    Texts,
    User,
    ButtonLanguage
} from './styles'

import logo from '../../assets/logo.png'
import video from '../../assets/video.png'
import image from '../../assets/image.svg'
import world from '../../assets/world.svg'
import dropdown from '../../assets/dropdown.svg'

export default function Home(){
    return(
        <Container>
            <SectionLeft>
                <HeaderLogo>
                    SLACA 2019
                </HeaderLogo>

                <img src={logo} alt="Logo"/>
                <Listas>
                    <ListaItem>Apresentação</ListaItem>
                    <ListaItem>Comitês</ListaItem>
                    <ListaItem>Autores</ListaItem>
                    <ListaItem>Eixos temáticos</ListaItem>
                    <ActiveItem><ListaItem>Trabalhos</ListaItem></ActiveItem>
                    <ListaItem>Contato</ListaItem>
                </Listas>
            </SectionLeft>
            <SectionRight>
                <HeaderSectionRight>
                    <Titles>
                        <h2>Anais do Simpósio Latino Americano de Ciências de Alimentos </h2>
                        <h1>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </h1>
                        <span>ISSN: 1234-5678</span> 
                    </Titles>
                    <ButtonLanguage>
                        <img src={world} alt=""/>
                        PT, BR
                        <img src={dropdown} alt=""/>
                    </ButtonLanguage>
                    <User>
                        <Texts>
                            <h3>Bem vindo!</h3>
                            <p>alguem12@galoascience.com</p>
                        </Texts>
                        <img src={image} alt="Foto do usuario logado"/>
                    </User>
                </HeaderSectionRight>
                <ContainerSectionRight>
                    
                </ContainerSectionRight>
            </SectionRight>
        </Container>
    )
}