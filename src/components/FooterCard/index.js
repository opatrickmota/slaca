import React from 'react'


import {
    FooterCard
} from './styles'

export default function FooterCardComponent(props){
    return(
        <FooterCard>
            {props.children}
        </FooterCard>
    )
}