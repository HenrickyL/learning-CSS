import './App.css';
import Menu from './NavigationMenu'
import items from './service/data.js'
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import styled from 'styled-components';


const Home = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`



function App() {
  return (
    <Router>
      <Routes>
      
        <Route  exact path='/' element={<Home>  <Menu items={items} /> </Home>}/>
        <Route  exact path='/profile' element={<Home>  <Menu items={items} /> </Home>}/>
        <Route  exact path='/message' element={<Home>  <Menu items={items} /> </Home>}/>
        <Route  exact path='/photos' element={<Home>  <Menu items={items} /> </Home>}/>
        <Route  exact path='/settings' element={<Home>  <Menu items={items} /> </Home>}/>
      
      
      
      </Routes>
    </Router>
  );
}

export default App;
