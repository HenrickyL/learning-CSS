import { useEffect, useState } from "react"
import { IconType } from "react-icons/lib"
import { StySocialMediaIcon, currentOptions, IOption } from "./style"
import {Link} from 'react-router-dom'
import {IoHelp as Help} from 'react-icons/io5' 



type typeOptions =  'facebook'|
                    'twitter'|
                    'instagram'|
                    'whatsapp'|
                    'youtube'|
                    'linkedin'|
                    'custom'

interface IMediaIconProp{
    type: typeOptions
    Icon?: IconType,
    to?: string,
    color?:string,
    hidden?:boolean,
    circle?:boolean
}

export const SocialMediaIcon = ({type,Icon,to,color,hidden,circle}:IMediaIconProp)=>{
    const [current,setCurrent] = useState<IOption>(currentOptions[0])
    const [isCustom,setCustom] = useState<boolean>(type==='custom')

    useEffect(()=>{
        if(!isCustom){
            const curr = currentOptions.find(x=>x.name===type)
            if(curr) setCurrent(curr)
        }
    },[])
   

    return (
        <StySocialMediaIcon 
            color={isCustom && color ? color : current.color}
            hidden={hidden}
            circle={circle}
        >
            <Link className="icon-link" to={to ?? "#"}>
                {
                    isCustom ?
                        <>
                            <Help className="icon"/>
                        </>
                    :
                        <current.icon className="icon"/>
                }
            </Link>
        </StySocialMediaIcon>
    )
}