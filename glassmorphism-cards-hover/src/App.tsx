import {Container} from './Container'
import {CardGlass} from './CardGlass'


function App() {

  return (
    <>
     <Container>
        <CardGlass rotation={-15}/>
        <CardGlass rotation={5}/>
        <CardGlass rotation={25}/>
        <CardGlass rotation={-15}/>
     </Container>
    </>
  )
}

export default App
