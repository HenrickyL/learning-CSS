import {ItemNM} from './style.js'
const _ItemNM = ({item,index,actionClick})=>{
    
    const handleClick = ()=>{
        actionClick(index)
    }
    return (
        <ItemNM 
            to={item.url || '#'} 
            onClick={handleClick}
            >
            <div>
                <item.img  />
            </div>
            <span>{item.title}</span>
          
        </ItemNM>
        
    )
}


export default _ItemNM