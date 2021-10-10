import React from 'react';
import './App.css';
import Header from './features/header/Header';
import Searchbar from './features/searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Searchbar></Searchbar>
    </div>
  );
}

export default App;
