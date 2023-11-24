import {styled} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SciFiCardSty = {
    color: string
}

const IconSty = styled(FontAwesomeIcon)`
`
const ClipSty = styled.div`
`

const SciFiCardSty = styled.div<SciFiCardSty>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 20rem;
    box-shadow: 0 0 0 15px #0009,
        0 25px 55px ${prop=>prop.color};
    background-color: ${prop=>prop.color};

    &:hover{
        h2{
            transform: scale(1);
            transition-delay: 0.5s;
            filter: blur(0px);
        }

        ${IconSty}{
            transition-delay: 0.75s;
            opacity: 1;
            transform: translateY(0px);
        }
        ${ClipSty}{
            & > span{
                &:nth-child(1){
                    clip-path: polygon(0 0, 50% 0, 100% 0);
                }
                &:nth-child(2){
                    clip-path: polygon(0 0, 0 100%, 50% 100%, 0% 100%);
                }
                &:nth-child(3){
                    clip-path: polygon(100% 100%, 100% 0, 100% 100%, 50% 100%);
                }
            }
        }
    }

    & > h2{
        position: relative;
        color: #020d1e;
        font-size: 4rem;
        text-align: center;
        line-height: 2.5em;
        transform:  scale(0);
        transition: 0.5s;
        transition-delay: 0s;
        filter: blur(10px);

        & > small{
            font-size: 0.35em;
            text-transform: uppercase;
            font-weight: 500;
        }
    }

    & > ${IconSty}{
        position: absolute;
        font-size: 4em;
        transition: 0.5s;
        transition-delay: 0s;
        opacity: 0;
        transform: translateY(100px);
    }

    & > ${ClipSty}{
        position: absolute;
        inset: 20px;
        box-shadow: 0 0 0 18px #020d1e;

        & > span{
            position: absolute;
            inset: 0;
            background-color: #020d1e;
            transition: 0.25s;
            transform: scale(1.05);

            &:nth-child(1){
                clip-path: polygon(0 0, 50% 40%, 100% 0);
                transition-delay: 0s;
            }
            &:nth-child(2){
                clip-path: polygon(0 0, 40% 50%, 50% 100%, 0% 100%);
                transition-delay: 0.25s;
            }
            &:nth-child(3){
                clip-path: polygon(60% 50%, 100% 0, 100% 100%, 50% 100%);
                transition-delay: 0.5s;
            }
        }
    }
`





export {SciFiCardSty, ClipSty, IconSty}