import React from 'react'

import {
    MainCard
} from './styles'

export default function MainCardComponent(props){

    return(
        <MainCard isExpanded={props.isExpanded} onClick={props.toggleResume}>
            {props.children}
        </MainCard>
    )
}