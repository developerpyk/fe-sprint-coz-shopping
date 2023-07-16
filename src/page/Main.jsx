import {useEffect, useState} from 'react';
import Product from '../component/Product';
import DebugComponent from '../util/DebugComponent';


export default function Main() {

  const [products, setProducts] = useState([]);
   
  useEffect (() => {
    fetch ('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
    .then((response) =>{
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((json) => setProducts(json))
    .catch((error) => console.error(error));
  }, [])

    return (
      <section >
        <div >
        {products && products.map((el, _) => {
          return (
            <div key={el.id}>
              <img src={el.image_url} alt="" />
              {el.title}
            </div>
          )
        })}
        </div>
        <Product></Product>
        <DebugComponent data={products}></DebugComponent>
      </section>
    );
  }
  

