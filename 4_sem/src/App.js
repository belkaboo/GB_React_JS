import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage';
import './App.css';
import Box from './components/Box';
import List from './components/List'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Apptask from './components/task4/Apptask'



const renderItems = () => {
  const items = [
    { id: 1, text: 'Элемент 1', color: 'red' },
    { id: 2, text: 'Элемент 2', color: 'blue' },
    { id: 3, text: 'Элемент 3', color: 'green' },
  ];



  return items.map(item => (
    <li key={item.id} style={{ color: item.color, margin: '10px 0' }}>
      {item.text}
    </li>
  ));
};



function App() {
  return (
    <div className="App">
      <div className='task-box'>
        <h3>Заданние 1</h3>
        <Box>
          <p>Текст children</p>
        </Box>

        <Box>
          <img
            src="https://ledpremium.ru/upload/iblock/a34/tablichka_pvkh_evakuatsionnyy_znak_napravlyayushchaya_strelka_200kh200_mm_rexant.jpg"
            alt="Пример изображения"
            style={{ maxWidth: '25%' }}
          />
        </Box>
        <Box>
          <Box>
            <button>Это кнопка в компоненте Box</button>
          </Box>
        </Box>
      </div>

      <div className='task-box'>
        <h3>Заданние 2</h3>
        <List render={renderItems} />
      </div>
      <div className='task-box'>
        <h3>Заданние 3</h3>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>

        </Router>

      </div>
      <div className='task-box'>
        <h3>Заданние 4</h3>
      </div>

    </div>
  );
}

export default App;
