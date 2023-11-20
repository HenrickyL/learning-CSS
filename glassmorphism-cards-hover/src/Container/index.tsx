import React, { ReactNode } from 'react';
import {ContainerWrapper} from './style'
type ContainerProps = {
    children?: ReactNode; 
};

const Container : React.FC<ContainerProps>= ({children}:ContainerProps)=>{
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}

export default Container;