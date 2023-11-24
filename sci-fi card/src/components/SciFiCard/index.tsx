import {SciFiCardSty,ClipSty, IconSty} from './style.ts'
import {faQuestion,IconDefinition} from '@fortawesome/free-solid-svg-icons'

type SciFiCardProp = {
    title?: string
    content?: string
    color?: string
    icon?: IconDefinition
}

function isHexColor(value: string): boolean {
  return /^#([0-9A-F]{3}){1,2}$/i.test(value);
}

const SciFiCard : React.FC<SciFiCardProp> = (prop:SciFiCardProp)=>{
    return (
        <SciFiCardSty color={prop.color && isHexColor(prop.color) ? prop.color: '#D6006e'}>
            <h2>{prop.title || "title"}<br /><small>{prop.content || 'default'}</small></h2>
            <IconSty icon={prop.icon || faQuestion} />
            <ClipSty>
                <span></span>
                <span></span>
                <span></span>
            </ClipSty>
        </SciFiCardSty>
    )
}


export {SciFiCard}