import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemsListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
         <NavBar/>
         <ItemListContainer producto="Pizza"/>
    </div>
  );
}

export default App;
