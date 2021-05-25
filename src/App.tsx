import React from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './Pages/ItemList';


function App() {
  return (
    <div className="App">
      <div className="container">
          <Header/>
          <ItemList />
      </div>
    </div>
  );
}

export default App;


