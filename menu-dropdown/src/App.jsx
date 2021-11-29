import './App.css';
import Dropdown from './Menu-Dropdown'
import items from './service/data.js'


function App() {
  return (
    <main>

      <Dropdown items={items} />
      <Dropdown items={items} />
      <Dropdown items={items} />
      <Dropdown items={items} />

    </main>
  );
}

export default App;
