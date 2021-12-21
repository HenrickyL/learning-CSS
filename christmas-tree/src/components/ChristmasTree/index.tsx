import { useEffect, useState } from 'react'
import {StlSnow,StlTree,StlLeafTop,StlLeafBottom,StlTop,StlShadown} from './style'

type TProp={
    lenI?: number
    lenJ?: number
    maxParticle?:number
    animationDelay?:number
}


const ChristmasTree = ({lenI=4,lenJ=4,maxParticle=100,animationDelay=4}:TProp)=>{
    type TPoint = {
        x: number
        y: number
        z: number

    }
    const nTopI = new Array(lenI).fill(0)
    const nTopJ = new Array(lenJ).fill(0)
    const [snow, setSnow] = useState<TPoint[]>([])

    
    // useEffect(() => {
    //     for(let j=0; j< 25; j++)
    //         setTimeout(()=>{

    //             for(let i=0; i< 5; i++){
    //                 let current = {x:Math.random(), y:Math.random(), z:Math.random()}
                        
    //                 snow.push(current)
        
    //             }
    //             setSnow([...snow ])
    //         },500)
        
        
    //     return ()=>{


    //     }

    // }, [])

    return (
    <>
            
        <StlTree>
            {nTopJ.map((_,j)=>
                <StlTop pos={j} className='top'>
                    {nTopI.map((_,i)=>
                        <StlLeafTop pos={i}/>
                        )}
            </StlTop>
            )}
            {nTopJ.map((_,j)=>
                <StlTop pos={j} className='bottom'>
                    {nTopI.map((_,i)=>
                        <StlLeafBottom pos={i}/>
                        )}
            </StlTop>
            )}
            <StlShadown />
        </StlTree>
        <div >
            {snow.map((s,i)=>
                <StlSnow key={i} x={s.x}/>
                )}
        </div>
        
    </>
    )
}

export default ChristmasTree;