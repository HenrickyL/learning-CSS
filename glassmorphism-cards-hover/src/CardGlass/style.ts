import {styled} from 'styled-components'

type CardGlassWrapperProp = {
    rotation?: number
    text?: string
}
export const CardGlassWrapper = styled.div<CardGlassWrapperProp>`
    position: relative;
    width: 12.5rem;
    height: 15rem;
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 25px 25px rgba(0,0,0,0.25);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    margin: 0 -2.813rem;
    transform: rotate(calc(${prop => prop.rotation || 0} * 1deg));

    &::before{
        content: "${prop=>prop.text || "default"}";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2.5rem;
        background-color: rgba(255,255,255,0.05);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    
`