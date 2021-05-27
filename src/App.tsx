import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import FixedCart from './components/FixedCart';
import Header from './components/Header';
import { IInitial } from './components/interface';
import CartList from './Pages/CartList';
import ItemList from './Pages/ItemList';
import OrderList from './Pages/OrderList'


function App() {
  const isCartShow = useSelector((state: IInitial) => state.isCartShow)
  const isOrdersShow = useSelector((state: IInitial) => state.isOrdersShow)
  return (
    <div className="App">
      <div className="container">
          <Header/>
          {isCartShow === false && isOrdersShow === false ? <ItemList /> : null}
          {isCartShow === true && isOrdersShow === false ? <CartList /> : null}
          {isCartShow === false && isOrdersShow === true ? <OrderList /> : null}
          {!isCartShow? <FixedCart /> : null}
          {/* <OrderList /> */}
      </div>
    </div>
  );
}

export default App;


