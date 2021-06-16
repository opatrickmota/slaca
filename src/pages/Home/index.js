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
    ButtonLanguage,
    Main,
    Video,
    Play,
    AutorVideo,
    MainRight,
    Share,
    Card,
    Buttons,
    Button
} from './styles'

import logo from '../../assets/logo.png'
import video from '../../assets/video.png'
import imageVideo from '../../assets/image-video.png'
import image from '../../assets/image.svg'
import world from '../../assets/world.svg'
import dropdown from '../../assets/dropdown.svg'
import download from '../../assets/download.svg'
import star from '../../assets/star.svg'
import doi from '../../assets/doi.svg'

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
                    <Main>
                        <Video>
                            <h1>
                                Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP 
                            </h1>
                            <Play background={video}>
                                <div>
                                    <h1>
                                        Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP 
                                    </h1>
                                    <AutorVideo>
                                        <img src={imageVideo} alt="Autor do video"/>
                                        <section>
                                            <h1>Beatriz Christiane Melo</h1>
                                            <h2>FCA / Universidade Estadual de Campinas</h2> 
                                        </section>
                                        
                                    </AutorVideo>
                                </div>
                                
                            </Play>
                        </Video>
                        <MainRight>
                            <Share>
                                <Buttons>
                                    <Button>
                                        <img src={download} alt="Icone de download"/>
                                        Download
                                    </Button>
                                    <Button>
                                        <img src={star} alt="Icone de estrela"/>
                                    </Button>
                                    <Button>
                                        <img src={doi} alt="Icone com a palavra Doi"/>
                                    </Button> 
                                </Buttons>
                                <p>COMO CITAR ESSE TRABALHO?</p>
                            </Share>
                            <Card>
                                
                            </Card>
                        </MainRight>
                    </Main>
                </ContainerSectionRight>
            </SectionRight>
        </Container>
    )
}