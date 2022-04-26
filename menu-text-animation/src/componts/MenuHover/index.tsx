import { useEffect, useState } from "react"
import { IMenu } from "../../data"
import { StyItem,StyMenu } from "./style"
interface IProp{
    data: IMenu[]
}

const MenuHover = ({data}:IProp)=>{
    const [items,setItems] = useState<IMenu[]>(data)
    useEffect(()=>{
        let aux = items.map(p=>{
             p.title = `${p.title}`
            return p
        })
        setItems(aux)
    },[])
    return(
        <StyMenu>
            {items.map(i=>
                <StyItem 
                    to={i.to}
                    color={i.color}
                    title={i.title}>{i.title}</StyItem>    
            )}
        </StyMenu>    
    )
}

export default MenuHover