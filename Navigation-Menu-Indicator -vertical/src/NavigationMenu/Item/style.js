import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../../service/colors";

export const ItemNM = styled(NavLink)`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    min-height: 4.5rem;
    width: 4.5rem;
    background-color: transparent;
    text-align:center;
    border-radius: 10px;
    transition: 1s;
    color: ${colors.clr};


    & > div{
        position: relative;
        display: block;
        font-size: 1.5rem;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
        color: ${colors.clr};
        z-index:1;
    }

    & > span{
        position: absolute;
        color: ${colors.clr};
        display: block;
        font-weight: 400;
        transition: 0.5s;
        font-size: 0.75em;
        letter-spacing: 0.08em;
        visibility: hidden;
        opacity: 0;
        color: ${colors.activeText};
        max-width: initial;
        text-overflow: ellipsis;
        overflow: hidden;
        transform: translateY(25px);
        z-index:1;


    }

    
        
        

    &.active{
        justify-content: flex-start;
        filter: brightness(1.3);
        padding-left: 5px;


        /* color: #333; */
        & > div{
            position: absolute;

            transform: translateX(3.5rem);
            z-index:2;

        }
        & > span{
            position: absolute;

            visibility: visible !important;
            opacity: 1;
            transform: translateY(0px);
            z-index:2;

        }

    }

    

    
    

`




// background-color: rgba(1,1,1,0.5);
   

//     @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
//         -webkit-backdrop-filter: blur(3px);
//         backdrop-filter: blur(3px);
//     }


/* 
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
    }
        color: white;
        border-radius: 8px;

        svg{
            color: white;
        }
*/