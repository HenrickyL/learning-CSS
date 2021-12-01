import styled,{keyframes} from 'styled-components'
import colors from '../service/colors'




export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 420px;
    height: 70px;
    border-radius: 10px;
    /* background: #fff; */
    background-color: rgba(1,1,1,0.2);
   

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
    }
`












