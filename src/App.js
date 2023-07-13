import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './component/Header'
import Footer from './component/Footer'
import Main from './page/Main'
import List from './page/List'
import Bookmark from './page/Bookmark'
import './base.css'



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/products/list" element={<List></List>} />
        <Route path="/bookmark" element={<Bookmark></Bookmark>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}





