import styled from 'styled-components'
import colors from '../service/colors'




export const Menu = styled.nav`
    position: relative;
    display: flex;
    padding-top:1rem;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    width: 70px;
    border-radius: 10px;
    background: ${colors.bgMenu};

   
`

export const Indicator = styled.div`
    position: absolute;
    top: 1.7rem;
    left: 3rem;
    
    width: 3rem;
    height: 3rem;
    background: ${colors.indicator};
    border-radius: 50%;
    border: 0.4rem solid ${colors.bgMenu};
    transition: 0.5s;
    transform: translateY(calc(${prop=>prop.position}*4.5rem)) rotateZ(-90deg);

    &::before{
        content: '';
        position: absolute;
        top: 45%;
        left: -1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border-top-right-radius: 22px;
        box-shadow: 0px -10px 0 0 ${colors.bgMenu};
    }

    &::after{
        content: '';
        position: absolute;
        top: 45%;
        right: -1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border-top-left-radius: 22px;
        box-shadow: 0px -10px 0 0 ${colors.bgMenu};
    }
`











 /* background-color: rgba(1,1,1,0.2);
   

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
} */