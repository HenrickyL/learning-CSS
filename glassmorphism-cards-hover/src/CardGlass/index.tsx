import React, { ReactNode } from 'react';
import {CardGlassWrapper} from './style'

type CardGlassProp = {
    children?: ReactNode
    rotation?: number
}

const CardGlass :  React.FC<CardGlassProp> = (prop:CardGlassProp)=>{
    return (
        <CardGlassWrapper rotation={prop.rotation}>
            {prop.children}
        </CardGlassWrapper>
    )
}

export {
    CardGlass
}