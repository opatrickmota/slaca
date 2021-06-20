import React from 'react'

import {
    Button
} from './styles'

export default function ButtonComponent(props){
    return(
        <Button onClick={()=> props.method()}>
            {props.children}
        </Button>
    )
}