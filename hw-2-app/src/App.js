import './App.css';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Comments'>
          <CommentsList />
        </div>
      </header>
    </div>
  );
}

export default App;
