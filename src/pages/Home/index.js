import React, { useState } from 'react'

import {
    Container,
    ToggleMenu,
    IconMenu,
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
    HiddenContent,
    SecondHeader,
    Comment,
    Interact,
    Response,
    HeaderResponse,
    AutorResponse,
    Blur,
    BlurContent,
    Form
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
import letras from '../../assets/letras.svg'
import people from '../../assets/people.svg'
import plant from '../../assets/plant.svg'
import head from '../../assets/head.svg'
import moreInformation from '../../assets/moreInformation.svg'

import {FaBars, FaTimes, FaCheckDouble} from 'react-icons/fa'

import CardContainer from '../../components/CardContainer'
import HeaderCard from '../../components/HeaderCard'
import MainCard from '../../components/MainCard'
import FooterCard from '../../components/FooterCard'
import Paragraph from '../../components/Paragraph'
import Strong from '../../components/TextStrong'
import OrangeText from '../../components/OrangeText'
import Buttons from '../../components/ButtonsContainer'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

export default function Home(){
    const [isExpanded, setIsExpanded] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [response, setResponse] = useState(false)

    function toggleResume(){
        setIsExpanded(!isExpanded)
    }

    function toggleMenu(){
        setIsOpen(!isOpen)

        if(isOpen){
            document.getElementById("menu").style.display = 'none'
        }else{
            document.getElementById("menu").style.display = 'block'
        }
    }

    function toggleResponse(){
        setResponse(!response)

        let elements = document.getElementsByClassName("response")
        elements = Object.values(elements)

        if(response){
            elements.forEach(e => {
                e.style.display = 'none'
            })
        }else{
            elements.forEach(e => {
                e.style.display = 'block'
            })
        }
    }

    function create(){
        if(document.getElementById("create")){
            document.getElementById("create").style.display = 'none'
        }

        if(document.getElementById("form")){
            document.getElementById("form").style.display = 'block'
        }

        if(document.getElementById("success")){
            document.getElementById("success").style.display = 'none'
        }

        if(document.getElementById("blur")){
            document.getElementById("blur").style.display = 'none'
        }
    }

    function enviar(){
        if(document.getElementById("blur")){
            document.getElementById("form").style.display = 'none'
            document.getElementById("blur").style.display = 'block'
        }

        if(document.getElementById("success")){
            document.getElementById("success").style.display = 'block'
        }

    }

    return(
        <Container>
            <IconMenu>
                <ToggleMenu onClick={()=>toggleMenu()}>
                    <div>
                        {
                            isOpen ? <FaTimes size={20} color="#fff" /> 
                            : <FaBars size={20} color="#fff" />
                        }    
                    </div>
                    
                </ToggleMenu> 
            </IconMenu>
            <SectionLeft id="menu">
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
                        
                        <CardContainer>
                            <HeaderCard>Discussões</HeaderCard>
                            <MainCard>
                                <SecondHeader id="create">
                                    <Paragraph fontSize="14px">
                                        <Strong>
                                            <OrangeText>Compartilhe suas ideias ou dúvidas com os autores!</OrangeText>
                                        </Strong>
                                    </Paragraph>

                                    <img src={letras} alt="Letras"/>
                                    <img src={people} alt="Pessoas"/>
                                    <img src={plant} alt="Planta"/>

                                    <Paragraph>
                                    Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
                                    </Paragraph>

                                    <Button method={()=>create()}>
                                        + criar tópico
                                    </Button>  
                                </SecondHeader>

                                <Form id="form">
                                    <h1>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</h1>
                                    <Paragraph><OrangeText>Assunto</OrangeText></Paragraph>
                                    <input placeholder="Defina um tópico sucinto para notificar os autores..." />
                                    <Paragraph><OrangeText>Conteúdo</OrangeText></Paragraph>
                                    <textarea />
                                    <div>
                                        <Button method={()=>enviar()}>Enviar</Button>
                                    </div>
                                </Form>
                                <SecondHeader display="none" id="success">
                                    <Paragraph fontSize="18px">
                                        <Strong>
                                            <OrangeText>Seu tópico foi enviado com sucesso! :D</OrangeText>
                                        </Strong>
                                    </Paragraph>
                                    <Paragraph marginTop="18px" fontSize="14px" >Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</Paragraph>
                                    <Paragraph marginTop="29px" fontSize="14px"><OrangeText>Descubra outros trabalhos!</OrangeText></Paragraph>
                                    
                                    <Button method={()=>create()}>criar novo tópico</Button>
                                </SecondHeader>
                                <Comment id="blur" display="none" position="relative">
                                    <Paragraph>
                                        <Strong>
                                            <OrangeText>Assunto da pergunta aparece aqui</OrangeText>
                                        </Strong>
                                    </Paragraph>
                                    <Paragraph fontSize="10px"><Strong>Carlos Henrique Santos</Strong></Paragraph>
                                    <Paragraph>
                                        Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                                    </Paragraph>
                                    <Blur>
                                        <BlurContent>
                                            <FaCheckDouble/>
                                            <Paragraph><Strong>Aguardando feedback dos autores</Strong></Paragraph>
                                            <Paragraph><OrangeText>Editar tópico</OrangeText></Paragraph>
                                        </BlurContent>
                                    </Blur>
                                </Comment>

                                <Comment>
                                    <Paragraph>
                                        <Strong>
                                            <OrangeText>Assunto da pergunta aparece aqui</OrangeText>
                                        </Strong>
                                    </Paragraph>
                                    <Paragraph fontSize="10px"><Strong>Carlos Henrique Santos</Strong></Paragraph>
                                    <Paragraph>
                                        Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                                    </Paragraph>

                                    <Interact>
                                        <img src={moreInformation} alt="Mais informações"/>
                                        <Button>
                                            <img src={head} alt="coração"/>
                                        </Button>
                                        <span>1 like</span>
                                        <span>1 resposta</span>
                                    </Interact>
                                </Comment>
                                <Comment clickable={true} onClick={()=>toggleResponse()}>
                                    <Paragraph>
                                        <Strong>
                                            <OrangeText>Assunto da pergunta aparece aqui</OrangeText>
                                        </Strong>
                                    </Paragraph>
                                    <Paragraph fontSize="10px"><Strong>Carlos Henrique Santos</Strong></Paragraph>
                                    <Paragraph>
                                        Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                                    </Paragraph>

                                    <Interact>
                                        <img src={moreInformation} alt="Mais informações"/>
                                        <Button>
                                            <img src={head} alt="coração"/>
                                        </Button>
                                        <span>1 like</span>
                                        <span>1 resposta</span>
                                    </Interact>
                                </Comment>
                                <Response className="response" background="gray">
                                    <HeaderResponse>
                                    <Paragraph fontSize="10px"><Strong>Adriano da Silva</Strong></Paragraph>
                                        <AutorResponse>
                                            <OrangeText>Autor</OrangeText>
                                            <FaCheckDouble/>
                                        </AutorResponse>
                                    </HeaderResponse>
                                    <Paragraph>
                                        Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                                    </Paragraph>
                                </Response>
                                <Response className="response">
                                    <HeaderResponse>
                                        <Paragraph fontSize="10px"><Strong>Carlos Henrique Santos</Strong></Paragraph>
                                    </HeaderResponse>
                                    <Paragraph>
                                        Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                                    </Paragraph>
                                </Response>
                                <Response className="response" background="gray">
                                    <HeaderResponse>
                                    <Paragraph fontSize="10px"><Strong>Carmila Ferreira Andrade</Strong></Paragraph>
                                        <AutorResponse>
                                            <OrangeText>Coautor</OrangeText>
                                            <FaCheckDouble/>
                                        </AutorResponse>
                                    </HeaderResponse>
                                    <Paragraph>
                                        Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                                    </Paragraph>
                                    <Paragraph>
                                        Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                                    </Paragraph>
                                </Response>
                                <Response className="response" background="gray">
                                    <HeaderResponse>
                                    <Paragraph fontSize="10px"><Strong>Ana Carolina</Strong></Paragraph>
                                        <AutorResponse>
                                            <OrangeText>Coautor</OrangeText>
                                            <FaCheckDouble/>
                                        </AutorResponse>
                                    </HeaderResponse>
                                    <Paragraph>
                                        Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                                    </Paragraph>
                                </Response>
                                
                            </MainCard>
                        </CardContainer>
                        <Footer/>
                    </Main>
                </ContainerSectionRight>
            </SectionRight>
        </Container>
    )
}