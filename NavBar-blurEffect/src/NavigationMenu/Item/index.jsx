import {ItemNM} from './style.js'
const _ItemNM = ({item})=>{
    return (
        <ItemNM to={item.url || '#'}>
            <item.img/>
            <span>{item.title}</span>
        </ItemNM>
    )
}


export default _ItemNM