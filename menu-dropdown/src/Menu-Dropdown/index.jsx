import { useState } from "react"
import {Dropdown,Options, Option} from './styles.js'


const MenuDropdown = ({items})=>{
    const [value,setValue] = useState("")
    const [active,setActive] = useState(false)
    const handleClickOption= (e)=>{
        setValue(e.target.textContent)
    }
    const handleClick = ()=>{
        setActive(!active)
    }
    const handleBlur = ()=>{
        setTimeout(()=>setActive(false), 150)
    }
    return (
        <Dropdown active={active}
            onClick={handleClick}
            onBlur={handleBlur}

         >
            <input type="text" 
                value={value}
                placeholder={"Dropdown Menu"}
                readOnly/>
            {active &&<Options >
                {
                items.map( (op,i)=>(
                    <Option key={`Mdd_${i}`} id={`op_${i}`} 
                     onClick={handleClickOption}
                     >
                            
                            <op.img />
                            <span>{op.title}</span>
                            </Option>
                ))
                }
            </Options>}
        </Dropdown>
    )


}

export default MenuDropdown