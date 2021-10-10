import React from 'react';
import './App.css';
import Header from './features/header/Header';
import Searchbar from './features/searchbar/Searchbar';
import Bookmark from './features/bookmarks/Bookmark';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Searchbar></Searchbar>
      <Bookmark></Bookmark>
    </div>
  );
}

export default App;
