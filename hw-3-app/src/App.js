import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: '#fff' }}>Урок 3. Virtual DOM. Подключение библиотеки UI-компонентов</h3>
        <TemperatureConverter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
