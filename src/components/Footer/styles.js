import styled from 'styled-components'

export const Footer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    border-top: 1px solid #ECECEC;
    padding: 20px 0;

    @media(max-width: 1090px){
        display: block;
    }
`

export const Logo = styled.div`
    width: 20%;
    padding-right: 20px;
    color: #341947;
    text-align: center;
    font-family: Roboto;
    h1{
        font-size: 65px;
        line-height: 65px;
    }
    span{
        display: block;
        font-size: 14px;
    }
    button{
        width: 100%;
        margin-top: 10px;
        border: 0;
        border-radius: 3px;
        background-color: var(--purple);
        color: var(--white);
        padding: 5px 10px;
    }

    @media(max-width: 1090px){
        width: 100%;
        button{
            width: auto;
        }
    }
`

export const TextFooter = styled.div`
    @media(max-width: 1090px){
        margin-top: 20px;
    }
`