import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './page/Main';
import Products from './page/Products';
import Bookmark from './page/Bookmark';
import './base.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/products/list" element={<Products></Products>} />
        <Route path="/bookmark" element={<Bookmark></Bookmark>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}





