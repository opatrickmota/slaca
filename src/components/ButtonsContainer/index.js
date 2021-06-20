import React from 'react'

import {
    Buttons
} from './styles'

export default function ButtonsComponent(props){
    return(
        <Buttons>
            {props.children}
        </Buttons>
    )
}