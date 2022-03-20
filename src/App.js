import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Example from "./components/Example";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="bg-green">
          <Counter />
        </div>
        <div className="bg-orange">
          <Example />
        </div>
      </header>
    </div>
  );
}

export default App;
