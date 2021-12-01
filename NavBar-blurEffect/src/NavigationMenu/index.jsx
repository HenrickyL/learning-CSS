import ItemNM from "./Item"
import { Menu } from "./styles"


const MenuNavigation = ({items})=>{
    return (
       <Menu>
           {items && items.map( (item,i)=>(
               <ItemNM  item={item} key={i}/>

           ))}
       </Menu>
    )
}

export default MenuNavigation