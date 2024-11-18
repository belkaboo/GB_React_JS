import './App.css';
import logo from './logo.png';

import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ color: '#fff' }}>Урок 3. Virtual DOM. Подключение библиотеки UI-компонентов</h3>
        <TemperatureConverter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
