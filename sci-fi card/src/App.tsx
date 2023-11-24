import { useState } from 'react'
import {Container} from './components/Container'
import {SciFiCard} from './components/SciFiCard'

import {faBrush as Brush,
  faCode as Code, 
  faRocket as Rocket, 
  faMoneyCheckDollar as Money,
  IconDefinition} from '@fortawesome/free-solid-svg-icons'


type SciFiCardProp = {
  title?: string
  content?: string
  color?: string
  icon?: IconDefinition
}

const myCards :SciFiCardProp[] = [
  {title:'01', content:'Design', color:'#f00', icon:Brush},
  {title:'02', content:'Code', color:'#0f0', icon:Code},
  {title:'03', content:'Lauch', color:'#fff', icon:Rocket},
  {},
]

function App() {
  const [cards] = useState<SciFiCardProp[]>(myCards)
  return (
    <>
      <Container>
        {cards.map(card=> <SciFiCard title={card.title} content={card.content} color={card.color} icon={card.icon}/>)}
      </Container>
    </>
  )
}

export default App
