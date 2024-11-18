import './App.css';
import Greeting from './components/1task/Greeting';
import Counter from './components/2task/Counter';
import MessageList from './components/3task/MessageList';
// import BasicButtonGroup from './components/Header';
// import InputForm from './components/InputForm';
// import TodoList from './components/TodoList';

const messages = [
  { id: 1, text: 'message 1' },
  { id: 2, text: 'message 2' },
  { id: 3, text: 'message 3' }
]

function App() {
  return (
    <div className="container">
      {/* <BasicButtonGroup />
      <InputForm /> */}
      <div className='task'>
        <Greeting name="Имя" />
        <Greeting name="Имя2" />
      </div>
      <div className='task'>
        <Counter />
      </div>
      <div className='task'>
        <MessageList messages={messages} />
      </div>
    </div>
  );
}

export default App;
