import React from 'react'

import {
    OrangeText
} from './styles'

export default function OrangeTextComponent(props){
    return(
        <OrangeText>
            {props.children}
        </OrangeText>
    )
}