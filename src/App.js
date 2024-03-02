import './App.css';
import items from './data/items';
import Navigation from './Components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import OrderPage from './Pages/OrderPage';
import RegistrationPage from './Pages/RegistrationPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/shop" element={ <OrderPage items={items}/>}></Route>
            <Route path="/register" element={ <RegistrationPage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
