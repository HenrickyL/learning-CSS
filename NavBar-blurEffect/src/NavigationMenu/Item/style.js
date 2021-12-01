import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const ItemNM = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    position: relative;
    text-decoration: none;
    height: 70px;
    width: 70px;
    z-index:1;
    background-color: rgba(1,1,1,0.5);
   

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
    }

    border-radius: 10px;
    color: white;
    transition: 0.3s;
    padding: 10px;

    &:hover{
        filter: brightness(1.3);
        background-color: rgba(225,	231, 228,0.7);
        box-shadow: 0px 0px 5px white;
        transform: translateY(-10px);
        color: #333;
        &::before{
            -webkit-transform: scaleY(-1);
            -moz-transform: scaleY(-1);
            -o-transform: scaleY(-1);
            -ms-transform: scaleY(-1);
            transform: scaleY(-1);
        }

    }

    &.active{
        height: 86px;
        background-color: #fff;
   

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
    }
        color: black;
        border-radius: 8px;

        svg{
            color: black;
        }
    }
    

`

