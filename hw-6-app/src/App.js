import logo from './logo.png';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Урок 5. Компоненты высшего порядка знакомство с Redux</h3>
          <AddProduct />
          <ProductList />
        </header>
      </div>
    </Provider>
  );
}

export default App;


