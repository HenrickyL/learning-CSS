import {styled} from 'styled-components'
import {CardGlassWrapper} from '../CardGlass/style'

export const ContainerWrapper  = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover > ${CardGlassWrapper}{
        transform: rotate(0deg);
        margin: 0 1rem;
    }
`

