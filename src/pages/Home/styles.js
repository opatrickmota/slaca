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
    margin-left: 220px;
    background-color: var(--white);
`;

export const HeaderSectionRight = styled.header`
    display: flex;
    align-items: center;
    background: var(--orange-light);
    width: 100vw;
    padding: 22px 0;
    padding: 10px 45px;
`

export const ButtonLanguage = styled.button`
    display: flex;
    align-items: center;
    padding: 4px;
    margin: 0 22px 0 100px;
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