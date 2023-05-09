import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {

  const nome = "Rafael"
  
  return (
    <div> className="App"
    <Frase />
    <Frase/>
      <HelloWorld />
      <SayMyName nome="Erika"/>
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Erika" 
      idade="43" 
      profissao="Desenvolvedora" 
      foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
    
  );
}

export default App;
