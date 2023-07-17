import { useEffect, useState } from 'react';
import Product from '../component/Product';
import ProductList from'../component/ProductList';
import './products.css'


export default function Products() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4&page=${page}`)
            const json = await response.json();
            setProducts(prevProducts => [...prevProducts, ...json]);
        };
        fetchProducts();
    }, [page]);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    console.log(products)

    return (
        <section className='products-page-wrapper'>
            <div className='products-list-wrapper'>
                  <ProductList />
                <div className='products-info-wrapper'>
                    {products.map((el) => <Product key={el.id} information={el} />)}
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
