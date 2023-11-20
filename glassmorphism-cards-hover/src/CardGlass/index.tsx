import React, { ReactNode } from 'react';
import {CardGlassWrapper} from './style'

type CardGlassProp = {
    children?: ReactNode
}

const CardGlass :  React.FC<CardGlassProp> = ({children}:CardGlassProp)=>{
    return (
        <CardGlassWrapper>
            {children}
        </CardGlassWrapper>
    )
}

export {
    CardGlass
}