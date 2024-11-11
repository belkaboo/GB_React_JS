import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';
import EventCard from "./components/EventCard";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Первый семинар по React.js
        </p>
        <Greeting />
        <CurrentTime />
        <div className='events'>
          <EventCard title='Tittle 1' date='11.11.24' place='Stadium' />
          <EventCard title='Tittle 2' date='11.12.24' place='Street 123 av.' />
          <EventCard title='Tittle 2' date='11.01.25' place='Forest' />
        </div>
      </div>
    </div>
  );
}

export default App;
