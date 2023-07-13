import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './component/Header'
import Main from './page/Main'
import List from './page/List'
import Bookmark from './page/Bookmark'
import './base.css'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/products/list" element={<List></List>} />
        <Route path="/bookmark" element={<Bookmark></Bookmark>} />
      </Routes>
    </BrowserRouter>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        coz-shopping
      </header>
    </div>
  );
}

export default App;

