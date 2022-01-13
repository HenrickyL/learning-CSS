import { useState } from 'react';
import {BiEdit as Edit} from 'react-icons/bi'
import {HiOutlineHeart as Heart} from 'react-icons/hi'
import {BsTrash as Trash} from 'react-icons/bs'
import { 
    StyActionMenu,
    StyAMUser,
    StyAMNavigation
} from './style'
import { IconType } from 'react-icons';
interface IProp{
    img: string,
    useName:string,
    description: string
}

interface IItemProp{
    Img: IconType,
    action: Function
}
const Item = ({Img,action}:IItemProp)=>{

    return (
        <span 
        onMouseOver={()=>action(false)}
        onMouseLeave={()=>action(true)}

        ><Img/></span>
    )
}
const Navigation = ()=>{
    const [active,setActive] = useState(false)
    const [isValid, setValid] = useState(true)
    const handleClick = ()=>{
        if(isValid)
            setActive(!active)
    }
    const handleHover = (x:boolean)=>{
        setValid(x)
    }
    return (
        <StyAMNavigation 
        onClick={handleClick}
        onBlur={()=>{setActive(false)}}
        className={active ? 'active':''}>
                <Item Img={Edit} action={handleHover}/>
                <Item Img={Heart} action={handleHover}/>
                <Item Img={Trash} action={handleHover}/>

        </StyAMNavigation>
    )
}


const ActionMenu = (prop:IProp)=>{
    return (
        <StyActionMenu>
            <StyAMUser>
                <div className='imgBx' >
                    <img src={prop.img} alt="User Perfil" />
                </div>
                <div className="details">
                    <h3>{prop.useName}</h3>
                    <p>{prop.description}</p>
                </div>
            </StyAMUser>
            <Navigation />
            
        </StyActionMenu>
            
    )
}


export default ActionMenu;