import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Erika"

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro app</p>
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <HelloWorld/>
    </div>
  );
}

export default App;
