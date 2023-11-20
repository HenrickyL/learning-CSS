import {Container} from './Container'
import {CardGlass} from './CardGlass'

import {faPenToSquare as Pen,
  faCode as Code, 
  faRocket as Rocket, 
  faMoneyCheckDollar as Money,
  IconDefinition} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

type CardGlassOptions = {
  rotation: number,
  text: string,
  icon: IconDefinition
}

const myCards : CardGlassOptions[] = [
  {rotation:-15, text: 'Design', icon:Pen},
  {rotation:5, text: 'Code', icon:Code},
  {rotation:25, text: 'Launch', icon:Rocket},
  {rotation:-15, text: 'Earn', icon:Money}
]

function App() {
  const [cards,setCards] = useState<CardGlassOptions[]>(myCards)
  return (
    <>
     <Container>
        {cards.map((card)=>
          <CardGlass rotation={card.rotation} text={card.text} icon={card.icon}/>
        )}
     </Container>
    </>
  )
}

export default App
