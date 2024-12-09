import logo from './logo.svg';
import './App.css';
import Welcome from './componets/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message ="Hola Welcome props" name="Tm0"/>
      </header>
    </div>
  );
}

export default App;
