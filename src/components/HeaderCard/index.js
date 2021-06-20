import React from 'react'

import {
    HeaderCard
} from './styles'

export default function HeaderCardComponent(props){
    return(
        <HeaderCard>
            {props.children}
        </HeaderCard>
    )
}