import React, { ReactNode } from 'react';
import {CardGlassWrapper} from './style'

type CardGlassProp = {
    children?: ReactNode
    rotation?: number
    text?: string
}

const CardGlass :  React.FC<CardGlassProp> = (prop:CardGlassProp)=>{
    return (
        <CardGlassWrapper 
            rotation={prop.rotation}
            text={prop.text}
        >
            {prop.children}
        </CardGlassWrapper>
    )
}

export {
    CardGlass
}