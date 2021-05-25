import React from 'react';
import './App.css';
import FixedCart from './components/FixedCart';
import Header from './components/Header';
import ItemList from './Pages/ItemList';


function App() {
  return (
    <div className="App">
      <div className="container">
          <Header/>
          <ItemList />
          <FixedCart />
      </div>
    </div>
  );
}

export default App;


