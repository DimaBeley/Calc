import { Counter } from './features/counter/Counter';
import { Calculator } from './features/calculator/Calculator';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
