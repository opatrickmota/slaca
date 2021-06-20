import React from 'react'

import {
    Card
} from './styles'

export default function CardContainer(props){
    return(
        <Card clickable={props.clickable}>
            {props.children}
        </Card>
    )
}