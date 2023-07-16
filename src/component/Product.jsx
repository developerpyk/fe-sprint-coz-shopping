import './product.css';

export default function Product() {
    return (
      <section className='product-container'> 
        <img src="hamburger.png" alt="product picture" />
        <h3>product name</h3>
        <span className='product-detail'>product detail</span>
      </section>
    );
  }
  
