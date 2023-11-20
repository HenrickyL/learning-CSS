import {Container} from './Container'
import {CardGlass} from './CardGlass'


function App() {

  return (
    <>
     <Container>
        <CardGlass rotation={-15} text='Design'/>
        <CardGlass rotation={5} text='Code'/>
        <CardGlass rotation={25} text='Launch'/>
        <CardGlass rotation={-15} text='Earn'/>
     </Container>
    </>
  )
}

export default App
