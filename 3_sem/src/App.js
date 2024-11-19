import './App.css';
import Greeting from './components/1task/Greeting';
import Counter from './components/2task/Counter';
import MessageList from './components/3task/MessageList';
import TextDisplayForm from './components/4task/TextDisplayForm';
import ThemeSwitcher from './components/5task/ThemeSwitcher';
// import BasicButtonGroup from './components/Header';
// import InputForm from './components/InputForm';
// import TodoList from './components/TodoList';
import React, { useState } from 'react';


const messages = [
  { id: 1, text: 'message 1' },
  { id: 2, text: 'message 2' },
  { id: 3, text: 'message 3' }
]

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`container ${theme}`}>
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
      <div className='task'>
        <TextDisplayForm />
      </div>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
