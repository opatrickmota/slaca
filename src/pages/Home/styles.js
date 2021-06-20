import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`

export const SectionLeft = styled.div`
    position: fixed;
    width: max-content;
    height: 100vh;
    background-color: var(--white);
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.087);
`;

export const HeaderLogo = styled.header`
    background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
    color: var(--white);
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 700;
    padding: 22px;
`

export const Listas = styled.ul`
    cursor: default;
`

export const ListaItem = styled.li`
    color: var(--brown);
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    padding: 7px 24px;
    list-style: none;
    border-bottom: 2px solid #E7E7E7;
`

export const ActiveItem = styled.div`
    background: var(--orange-light);  
    border-left: 5px solid var(--orange);
`

export const SectionRight = styled.div`
    padding-left: 220px;
    background-color: var(--white);
`;

export const HeaderSectionRight = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--orange-light);
    padding: 10px 45px;

    @media(max-width: 1100px){
        display: block;
    }

    @media (max-width: 900px){
        padding: 10px;
    }
`

export const UserButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media(max-width: 1100px){
        margin-top: 20px;
    }
`

export const ButtonLanguage = styled.button`
    display: flex;
    align-items: center;
    width: max-content;
    margin-right: 20px;
    padding: 4px;
    background: none;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 3px 0;
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #333333;
    

    img{
        margin: 0 3px;
    }
`

export const ContainerSectionRight = styled.div`
    padding: 45px;

    @media (max-width: 900px){
        padding: 10px;
    }
`

export const Titles = styled.div`
    color: var(--brown);
    h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
    }
    h2{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
    }
    span{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
`

export const User = styled.div`
    display: flex;
    align-items: center;

    img{
        border-radius: 50%;
        margin-left: 15px;
    }
`

export const Texts = styled.div`
    font-family: Quicksand;
    font-style: normal;
    text-align: right;
    color: #333333;
    h3{
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }
    p{
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
    }
`

export const Main = styled.div`
    display: block;
`

export const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.05em;
        color: var(--orange);
        margin-bottom: 19px;
        max-width: 62%;
    }

    @media (max-width: 1020px){
        display: block;
        h1{
            max-width: 100%;
        }
    }
`

export const MainContentVideo = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1424px){
        display: block;
    }
`

export const Video = styled.div`
    height: 100%;
`
export const Play = styled.div`
    height: 439px;
    width: 784px;
    background: url(${props => props.background}) no-repeat; 
    border-radius: 3px;
    position: relative;
    div{
        border-radius: 3px;
        position: absolute;
        background: rgba(141,53,6,0.5);
        width: 784px;
        height: 100%;
        top: 0;
        left: 0;
        padding: 35px;
    }

    h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 25px;
        letter-spacing: 0.05em;
        color: var(--white);
    }

    @media (max-width: 1424px){
        width: auto;
        max-width: 784px;
        div{
            max-width: 784px;
            width: auto;
        }
    }

    @media (max-width: 900px){
        h1{
            font-size: 18px;
        }
        div{
            padding: 8px;
        }
    }
`

export const AutorVideo = styled.section`
    display: flex;
    align-items: center;

    bottom: 60px;
    position: absolute;

    img{
        margin-right: 15px;
        padding: 2px;
        border-radius: 50%;
        border: 1px solid var(--orange);
    }

    h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 34px;
        line-height: 25px;
        letter-spacing: 0.05em;
        color: var(--white);
        margin: 0 0 5px;
    }
    h2{
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.05em;
        color: var(--white);
    }

    @media (max-width: 900px){
        h1{
            font-size: 22px;
        }
        h2{
            font-size: 14px;
        }
    }
    
`

export const MainRight = styled.div`
    width: 20%;

    @media (max-width: 1424px){
        margin-top: 20px;
        width: 100%;
    }
`

export const Share = styled.div`
    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 25px;
        text-align: right;
        letter-spacing: 0.05em;
        color: var(--orange);
        margin-top: 18px;
    }
`

export const HiddenContent = styled.div`
    display: ${props => props.isExpanded ? 'block' : 'none'};
    padding: 11px 15px;
    p+p{
        margin-top: 50px;
    }
`