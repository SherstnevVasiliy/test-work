import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import FixedCart from './components/FixedCart';
import Header from './components/Header';
import { IInitial } from './components/interface';
import CartList from './Pages/CartList';
import ItemList from './Pages/ItemList';


function App() {
  const isCartShow = useSelector((state: IInitial) => state.isCartShow)
  return (
    <div className="App">
      <div className="container">
          <Header/>
          {!isCartShow? <ItemList /> : <CartList />}
          {!isCartShow? <FixedCart /> : null}
      </div>
    </div>
  );
}

export default App;


