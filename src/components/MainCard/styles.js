import styled from 'styled-components'

export const MainCard = styled.div`
    display: ${props => props.isExpanded ? 'none' : 'block'};
    padding: 11px 15px;
`