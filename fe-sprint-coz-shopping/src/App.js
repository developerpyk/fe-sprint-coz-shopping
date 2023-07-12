import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './page/Main'
import './base.css'


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Main></Main>
          coz-shopping
        </header>
      </div>
    </BrowserRouter>
  );
}

