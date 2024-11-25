import logo from './logo.png';
import './App.css';
import { useSelector } from 'react-redux';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {

  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: isDark ? '#282c34' : '#9d9d9d',
          color: isDark ? 'white' : 'black',
          transition: 'all 0.3s'
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Урок 5. Компоненты высшего порядка знакомство с Redux</h5>
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default App;
