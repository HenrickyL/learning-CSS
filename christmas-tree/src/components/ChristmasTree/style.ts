import styled,{keyframes} from "styled-components";


type TLeaf={
    pos: number
}
type TSnow={
    x: number
    // y:number
    time?:number
}
const rotate = keyframes`
    0% {
    transform:rotateX(-20deg) rotateY(0deg);
    }

    to {
    transform:rotateX(-20deg) rotateY(360deg);
    }
`;



export const StlShadown = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background-color: #0005;
    transform-style:preserve-3d;
    transform: rotateX(90deg) translateZ(-380px);
    filter: blur(20px);
`

export const StlLeafTop = styled.span<TLeaf>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,#69c069, #77dd77 );
    clip-path: polygon(50% 0, 0% 100%, 100% 100%);
    transform-origin: bottom;
    border-bottom: 10px solid #00000019;
    /* animation: animation 2s forwards; */
    transform: 
        rotateY(calc(90deg * ${p=>p.pos})) 
        translateZ(150px)
        rotateX(30deg);
    
    
        
    @keyframes animation {
        0%{
            transform: 
                rotateY(0) 
                translateZ(0)
                rotateX(0);
        }

        100%{
            transform: 
                rotateY(calc(90deg * 30px)) 
                translateZ(150px)
                rotateX(30deg);
        }
    }

`



export const StlLeafBottom = styled.span<TLeaf>`
    position: absolute;
    top: 150px;
    left: calc(50% - 30px);
    width: 60px;
    height: 100%;
    background: linear-gradient(90deg,#bb4622, #df7214 );
    border-bottom: 10px solid #00000055;
    transform: 
        rotateY(calc(90deg * ${p=>p.pos})) 
        translateZ(30px);
`
export const StlTop = styled.div<TLeaf>`
    position: absolute;
    top: -250px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateY(calc(100px*${p=>p.pos}));

   

`


export const StlTree = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    animation: ${rotate} 10s linear infinite;
    transform: rotateX(-20deg) rotateY(30deg);
    transition: 0.5s;

    &::before{
       content: '🌟' ;
       position: absolute;
       top: -270px;
       left: calc(50% - 43px);
       font-size: 4rem;
       border-radius: 50%;
       

   }

   &::after{
       content: "@HenrickyL";
       position: absolute;
       top: 570px;
       left: calc(50% );
       font-size: 2rem;
       color: white;
   }
`

export const StlSnow = styled.div<TSnow>`
    position: absolute;
    top: 10px;
    left:${p=>p.x*100}%;
    z-index: 10;
    ${p=>
        `
        width: ${p.x*10+5}px;
        height: ${p.x*10+5}px;
        `
    }
    
    background-color:#e0FAFA ;
    filter: blur(1px);
    border-radius: 50%;
    box-shadow: 0 0 10px #e0FFFF;
    
    
    animation: anime ${p=>p.time || 4 + Math.random()*1}s linear infinite;

   @keyframes anime{
       from{
        transform: translateX(0%) translateY(0%);
       }
       to{
        transform: translateX(${p=>p.x*500}px) translateY(100vh);

       }
   }
`