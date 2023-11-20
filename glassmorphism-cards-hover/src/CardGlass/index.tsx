import React from 'react';
import {CardGlassWrapper, IconSty} from './style'
import {faQuestion,IconDefinition} from '@fortawesome/free-solid-svg-icons'

type CardGlassProp = {
    rotation?: number
    text?: string
    icon?: IconDefinition
}

const CardGlass :  React.FC<CardGlassProp> = (prop:CardGlassProp)=>{
    return (
        <CardGlassWrapper 
            rotation={prop.rotation}
            text={prop.text}
        >
            <IconSty icon={prop.icon || faQuestion}/>:
        </CardGlassWrapper>
    )
}

export {
    CardGlass
}