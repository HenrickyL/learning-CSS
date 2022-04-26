import { cpuUsage } from "process";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IProp{
    title: string
    color?: string
}

export const StyItem = styled(NavLink)<IProp>`
    position:relative ;
    text-decoration:none ;
    font-size: 4em;
    text-decoration:none ;
    letter-spacing:2px ;
    text-transform: uppercase ;
    color:transparent ;
    -webkit-text-stroke: 1px rgba(255,255,255,0.5) ;
    &::before{
        ${p=> `content: " ${p.title}"` || `content: ""`} ;
        position:absolute ;
        color:${p=>p.color || '#fff'} ;
        width:0% ;
        overflow:hidden;
        transition: 1s ;
        box-sizing: content-box;
        
    }
    
    &:hover::before{
        width:100% ;
        border-right: 5px solid ${p=>p.color || '#fff'} ;
        filter:drop-shadow(0 0 1rem ${p=>p.color || '#fff'}) ;

    }

    &.active{
        -webkit-text-stroke: 2px rgba(255,255,255,0.8) ;

        color:${p=>p.color || '#fff'} ;
        &::before{

            width:100% ;
            filter:drop-shadow(0 0 1.5rem ${p=>p.color || '#fff'}) ;
            border-right: none ;

            
        }


    }



   
`

export const StyMenu = styled.nav`
    position: relative;
    display:flex ;
    flex-direction:column;
    gap: 1.8rem

`