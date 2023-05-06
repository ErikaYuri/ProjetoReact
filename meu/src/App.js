import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {

  const nome = "Rafael"
  
  return (
    <div> className="App"
      <HelloWorld />
      <SayMyName nome="Erika"/>
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Erika" 
      idade="43" 
      profissao="Desenvolvedora" 
      foto="https://via.placeholder.com/150"></Pessoa>
    </div>
    
  );
}

export default App;
