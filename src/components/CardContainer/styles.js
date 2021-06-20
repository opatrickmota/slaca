import styled from 'styled-components'

export const Card = styled.div`
    border: 1px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 20px;

    cursor: ${props => props.clickable ? 'pointer': 'default'};

    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: 0.02em;
`