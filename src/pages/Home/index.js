import React, { useState } from 'react'

import {
    Container,
    SectionLeft,
    HeaderLogo,
    Listas,
    ListaItem,
    ActiveItem,
    SectionRight,
    HeaderSectionRight,
    UserButtons,
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
    MainHeader,
    MainContentVideo,
    HiddenContent
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

import CardContainer from '../../components/CardContainer'
import HeaderCard from '../../components/HeaderCard'
import MainCard from '../../components/MainCard'
import FooterCard from '../../components/FooterCard'
import Paragraph from '../../components/Paragraph'
import Strong from '../../components/TextStrong'
import OrangeText from '../../components/OrangeText'
import Buttons from '../../components/ButtonsContainer'
import Button from '../../components/Button'

export default function Home(){
    const [isExpanded, setIsExpanded] = useState(false)

    function toggleResume(){
        setIsExpanded(!isExpanded)
    }

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
                    <UserButtons>
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
                    </UserButtons>
                </HeaderSectionRight>
                <ContainerSectionRight>
                    <Main>
                        <MainHeader>
                            <h1>
                                Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP 
                            </h1>
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
                        </MainHeader>
                        <MainContentVideo>
                            <Video>
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
                                <CardContainer>
                                    <HeaderCard>Detalhes</HeaderCard>
                                    <MainCard>
                                        <Paragraph>Tipo de apresentação: <Strong>Pôster</Strong></Paragraph>
                                        <Paragraph>Eixo temático: <Strong>Alimentação e saúde (AS)</Strong></Paragraph>
                                        <Paragraph>Palavras-chaves: <Strong> Alimentos funcionais, alimentação escolar</Strong></Paragraph>
                                        
                                        <Paragraph fontSize={20} marginTop="20px"><Strong>Autores:</Strong></Paragraph>
                                        <Paragraph fontSize={20}>Galileo Galilei¹</Paragraph>
                                        <Paragraph fontSize={20}>Berta Lange de Morretes²</Paragraph>
                                        <Paragraph fontSize={20}>Isaac Newton³</Paragraph>
                                        <Paragraph fontSize={20}>Cesar Lattes¹</Paragraph>
                                        <Paragraph fontSize={20}>Stephen Hawking⁴</Paragraph>

                                        <FooterCard>
                                            <Paragraph>¹Universidade Estadual de Campinas</Paragraph>
                                            <Paragraph>²Universidade de São Paulo</Paragraph>
                                            <Paragraph>³Instituto Nacional de Pesquisas Espaciais</Paragraph>
                                            <Paragraph>⁴Universidade Federal do Rio de Janeiro</Paragraph>
                                        </FooterCard>
                                    </MainCard>
                                </CardContainer>
                            </MainRight>
                        </MainContentVideo>
                        
                        <CardContainer clickable={true}>
                            <HeaderCard>Resumo</HeaderCard>
                            <MainCard toggleResume={toggleResume} isExpanded={isExpanded}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant... 
                                <OrangeText>ver mais</OrangeText>
                            </MainCard>
                            <HiddenContent onClick={toggleResume} isExpanded={isExpanded}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.
                                </p>
                                <p>
                                    Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.
                                </p>
                                <p>
                                    Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.
                                </p>
                                <p>
                                    Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </HiddenContent>
                        </CardContainer>
                        
                    </Main>
                </ContainerSectionRight>
            </SectionRight>
        </Container>
    )
}