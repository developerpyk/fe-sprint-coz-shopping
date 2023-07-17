import {useEffect, useState} from 'react';
import Product from '../component/Product';
import DebugComponent from '../util/DebugComponent';
import "./main.css"


export default function Main() {

   const [products, setProducts] = useState([]);
   const [bookmarks, setBookmarks] = useState([]);

  useEffect (() => {
   fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
   .then((res) => res.json())
   .then((json) =>  setProducts(json))
  }, [])

  useEffect (() => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
    .then((res) => res.json())
    .then((json) => setBookmarks(json))
  }, [])

  console.log(products)
  console.log(bookmarks)

    return (
    <section className='main-page-wrapper'>
        <div className='product-list-wrapper'>
          <div className='product-list-title'>상품 리스트</div>
          <div className='product-info-wrapper'>
          {products.map((el) => <Product key={el.id} information={el}/>)}     
          </div>   
        </div>
        {/* <div className='bookmark-list-wrapper'>
          <div className='bookmark-list-title'>북마크 리스트</div>
          <div className='bookmark-info-wrapper'>
            {bookmarks.map((el) => <Bookmark key={el.id} information={el}/>)}
          </div>
        </div> */}
        {/*<DebugComponent data={products}></DebugComponent>*/}
      </section>
      )
      
  }
  

