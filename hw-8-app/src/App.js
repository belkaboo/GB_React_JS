import "./styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./components/MainPage";
import CatalogPage from "./components/CatalogPage";
import CartPage from "./components/CartPage";
import RegistrationPage from "./components/RegistrationPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
