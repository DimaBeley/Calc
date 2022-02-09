import { Counter } from './features/counter/Counter';
import { TodoList } from './features/todoList/TodoList';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
