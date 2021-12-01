import styled from 'styled-components'
import colors from '../service/colors'




export const Menu = styled.nav`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 420px;
    height: 70px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 10px  20px black;

   
`

export const Indicator = styled.div`
    position: absolute;
    top: -50%;
    width: 4rem;
    height: 4rem;
    background: ${colors.indicator};
    border-radius: 50%;
    border: 0.4rem solid ${colors.clr};
    transition: 0.5s;
    transform: translateX(calc(${prop=>prop.position}*4.5rem) );

    &::before{
        content: '';
        position: absolute;
        top: 56%;
        left: -1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border-top-right-radius: 22px;
        box-shadow: 0px -10px 0 0 ${colors.clr};
    }

    &::after{
        content: '';
        position: absolute;
        top: 56%;
        right: -1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border-top-left-radius: 22px;
        box-shadow: 0px -10px 0 0 ${colors.clr};
    }
`











 /* background-color: rgba(1,1,1,0.2);
   

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
} */