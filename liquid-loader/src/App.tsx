import './App.css'
// import Menu from './component/Menu'
import {Aplication} from './styleGlobal'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Loader from './component/Loader'

const Home = ()=>{
  return <Aplication>
    <h1 style={{marginRight:'50px',color:'white'}} >Normal</h1>
    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Loader color='red'/>
      <Loader color='green'/>
      <Loader color='blue'/>
      <Loader />
    </div>

    <h1 style={{marginRight:'50px',color:'white'}} >Reverse</h1>
    <div style={{display:'flex',flexDirection:'row'}}>
      <Loader color='red' reverse/>
      <Loader color='green' reverse/>
      <Loader color='blue' reverse/>
      <Loader reverse/>
    </div>

    <h1 style={{marginRight:'50px',color:'white'}} >Linear</h1>
    <div style={{display:'flex',flexDirection:'row'}}>
      <Loader color='red' linear/>
      <Loader color='green' linear/>
      <Loader color='blue' linear/>
      <Loader reverse/>
    </div>

    <h1 style={{marginRight:'50px',color:'white'}} >Core Color</h1>
    <div style={{display:'flex',flexDirection:'row'}}>
      <Loader color='red'  spinColor={'#FFFF00'}/>
      <Loader color='green' spinColor={'#FFFF00'}/>
      <Loader color='blue' spinColor={'#FFFF00'}/>
      <Loader spinColor={'#FFFF00'}/>
    </div>

  </Aplication>
}

// interface IProp{
//   id:number
// }


function App(): any{
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Home/>} />
          <Route path='/messages' element={<Home/>} />
          <Route path='/photos' element={<Home/>} />
          <Route path='/settings' element={<Home/>} />


          
      </Routes>   
    </BrowserRouter>
    
  );
}

export default App;
