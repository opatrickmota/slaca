import styled from 'styled-components'

export const Paragraph = styled.p`
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.fontSize ? props.fontSize : '12px'};
    line-height: 15px;
    margin-bottom: 5px;
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    opacity: 0.8;
`