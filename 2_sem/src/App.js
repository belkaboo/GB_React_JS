import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* TODO */}
        <Counter />
        <TextInput />



      </header>
    </div>
  );
}

export default App;
