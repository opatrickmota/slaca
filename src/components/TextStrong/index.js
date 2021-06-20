import React from 'react'

import {
    Strong
} from './styles'

export default function TextStrong(props){
    return(
        <Strong>
            {props.children}
        </Strong>
    )
}