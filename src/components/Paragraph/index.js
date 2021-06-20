import React from 'react'

import {
    Paragraph
} from './styles'

export default function ParagraphComponent(props){
    return(
        <Paragraph   fontSize={props.fontSize} marginTop={props.marginTop}>
            {props.children}
        </Paragraph>
    )
}