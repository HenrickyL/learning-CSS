import ActionMenu from "./components/ActionMenu";
import { Colors } from "./styles/global";
function App() {
  return (
    <div style={{display:'flex',gap:'10px', background: Colors.bg, alignItems: 'center',justifyContent:'center', height:'100vh', flexDirection:'column'}}>
      <div style={{display:'flex',gap:'10px', flexDirection:"column"}}>
      <ActionMenu 
        img="/perfil.png" 
        description="Fullstack Develop"
        useName="Henricky Lima"/>

      <ActionMenu 
        img="/maribel.png" 
        description="Protagonist"
        useName="Mirabel Madrigal"/>

      <ActionMenu 
        img="/bruno.png" 
        description="We don't talk about him"
        useName="Bruno Madrigal"/> 

      </div>
      

    </div>)
}

export default App;
