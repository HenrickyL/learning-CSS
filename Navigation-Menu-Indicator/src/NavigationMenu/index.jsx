import { useState } from "react"
import ItemNM from "./Item"
import { Menu,Indicator } from "./styles"


const MenuNavigation = ({items})=>{
    const [selector, setSelector] = useState(0)
    const adjust =(x)=>{
        const half = Number.parseInt(items.length/2) 
        return x-half 
        // 0-half <= x  && x<= half?
    }
    return (
       <Menu>
            <Indicator position={adjust(selector)} />

           {items && items.map( (item,i)=>(
               <ItemNM  key={i} item={item} actionClick={setSelector} index={i}/>

           ))}
       </Menu>
    )
}

export default MenuNavigation