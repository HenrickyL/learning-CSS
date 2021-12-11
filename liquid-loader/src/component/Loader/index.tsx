import {Loader,Pin} from './style'

interface IProp{
    pins?: number
    color?:string
    spinColor?:string | null
    reverse?:boolean;
    linear?:boolean

}

const _Loader = ({pins=8,color,spinColor,reverse,linear}:IProp)=>{
    const vPins = Array(pins).fill(0)
    const spins=Math.floor(pins/2+1)
    const vSelect = Array(spins).fill(0)

    return (
        <Loader >
            <svg>
                <filter id='gooey'>
                    <feGaussianBlur in='SourceGraphic'
                        stdDeviation='10'/>
                        <feColorMatrix values="
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 20 -10
                        "/>
                </filter>
            </svg>
            {vPins.map((_,i)=>
                <Pin key={`Fix${i}`}  
                    color={color}
                    len={pins} 
                    position={i+1} />
            )}
            {vSelect.map((_,i)=>
                <Pin    className='rotate' 
                        key={`Din${i}`} position={i+1}
                        color={color}
                        reverse={reverse}
                        linear={linear}
                        spinColor={i===spins-1?spinColor:null}
                        len={spins}/>
            )}
        </Loader>
    )
}

export default _Loader