import { SocialMediaIcon } from './components/SocialMediaIcon';

import { StyApp } from './styles/global';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


const Main = ()=>(
  <StyApp >
    <div style={{display:'flex', color:'white',flexDirection:'column',gap:'20px'}}>
      <h2>Default</h2>
      <SocialMediaIcon type={'facebook'}  />
      <SocialMediaIcon type={'instagram'}/>
      <SocialMediaIcon type={'twitter'}/>
      <SocialMediaIcon type={'whatsapp'} />
      <SocialMediaIcon type={'youtube'}/>
      <SocialMediaIcon type={'linkedin'}/>
      <SocialMediaIcon type={'custom'} color={'#fff'}/>
    </div>

    <div style={{display:'flex', color:'white', flexDirection:'column',gap:'20px'}}>
      <h2>Hidden</h2>
      <SocialMediaIcon type={'facebook'}  hidden />
      <SocialMediaIcon type={'instagram'}hidden />
      <SocialMediaIcon type={'twitter'}hidden />
      <SocialMediaIcon type={'whatsapp'} hidden />
      <SocialMediaIcon type={'youtube'}hidden />
      <SocialMediaIcon type={'linkedin'}hidden />
      <SocialMediaIcon type={'custom'} hidden color={'#fff'}/>
    </div>

    <div style={{display:'flex', color:'white',flexDirection:'column',gap:'20px'}}>
      <h2>Circle</h2>
      <SocialMediaIcon type={'facebook'}  circle />
      <SocialMediaIcon type={'instagram'}circle />
      <SocialMediaIcon type={'twitter'}circle />
      <SocialMediaIcon type={'whatsapp'} circle />
      <SocialMediaIcon type={'youtube'}circle />
      <SocialMediaIcon type={'linkedin'}circle />
      <SocialMediaIcon type={'custom'} circle color={'#fff'}/>
    </div>

    </StyApp>
)


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App;