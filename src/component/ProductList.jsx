import {useState} from 'react'
import Allbtn from "../img/Allbtn.png"
import Productbtn from "../img/Productbtn.png"
import Categorybtn from "../img/Categorybtn.png"
import Exhibitionbtn from "../img/Exhibitionbtn.png"
import Brandbtn from "../img/Brandbtn.png"
import Product from "./Product"
import './productlist.css'

export default 


function ProductList() {
    
  const [selectedType, setSelectedType] = useState();

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  
//   const products = [
//     { type: 'All' , imgUrl: Allbtn  },
//     { type: 'Product', imgUrl: Productbtn  },
//     { type: 'Category',  imgUrl: Categorybtn  },
//     { type: 'Exhibition',  imgUrl: Exhibitionbtn  },
//     { type: 'Brand',  imgUrl: Brandbtn },
//   ];

//   const filteredProducts = selectedType === 'All' ? products : products.filter((product) => product.type === selectedType);

  return (
    <div className='list-wrapper'>
      <button className='button' onClick={() => handleTypeClick('All')}><img className='button-img' src={Allbtn}/><br/>전체</button>
      <button className='button' onClick={() => handleTypeClick('Product')}><img className='button-img' src={Productbtn}/><br/>상품</button>
      <button className='button' onClick={() => handleTypeClick('Category')}><img className='button-img' src={Categorybtn}/><br/>카테고리</button>
      <button className='button' onClick={() => handleTypeClick('Exhibition')}><img className='button-img' src={Exhibitionbtn}/><br/>기획전</button>
      <button className='button' onClick={() => handleTypeClick('Brand')}><img className='button-img' src={Brandbtn}/><br/>브랜드</button>
    </div>
  );
}
// const Nav = ({ type }) => {
  // type에 따른 분류 로직을 구현할 수 있습니다.
  // 예를 들어, type이 'Product', 'Category', 'Exhibition', 'Brand'일 때 각각 다른 내용을 출력하도록 할 수 있습니다.

//   if (type === 'All') {
//     return (
//       <div>
        
//       </div>
//     );
//   }


//   if (type === 'Product') {
//     // Product 타입에 해당하는 분류 로직
//     return (
//       <div>
//         {/* Product 타입에 해당하는 내용 */}
//       </div>
//     );
//   }

//   if (type === 'Category') {
//     // Category 타입에 해당하는 분류 로직
//     return (
//       <div>
//         {/* Category 타입에 해당하는 내용 */}
//       </div>
//     );
//   }

//   if (type === 'Exhibition') {
//     // Exhibition 타입에 해당하는 분류 로직
//     return (
//       <div>
//         {/* Exhibition 타입에 해당하는 내용 */}
//       </div>
//     );
//   }

//   if (type === 'Brand') {
//     // Brand 타입에 해당하는 분류 로직
//     return (
//       <div>
//         {/* Brand 타입에 해당하는 내용 */}
//       </div>
//     );
//   }

//   // 타입이 정의되지 않은 경우 예외 처리
//   return (
//     <div>
//       <p>지원하지 않는 타입입니다.</p>
//     </div>
//   );
// // };

// // export default Nav;




// import { useState } from 'react';

// export default function ProductList() {
//     // 상태 초기화: 선택된 타입
//     const [selectedType, setSelectedType] = useState('');

//     // 타입 버튼 클릭 이벤트 핸들러
//     const handleTypeClick = (type) => {
//         setSelectedType(type);
//     };

//     // 상품 리스트 데이터
//     const products = [
//         {type: 'All'},
//         {type: 'Product' },
//         {type: 'Category' },
//         {type: 'Exhibition' },
//         {type: 'Brand' }
//     ];

//     // 타입에 따라 필터링된 상품 리스트
//     const filteredProducts = selectedType
//         ? products.filter((product) => product.type === selectedType)
//         : products;

//     return (
//         <div>
//             <button onClick={() => handleTypeClick('All')}>전체</button>
//             <button onClick={() => handleTypeClick('Product')}>상품</button>
//             <button onClick={() => handleTypeClick('Category' )}>카테고리</button>
//             <button onClick={() => handleTypeClick('Exhibition')}>기획전</button>
//             <button onClick={() => handleTypeClick('Brand')}>브랜드</button>
       
//             {filteredProducts.map((product) => (
//                 <div key={product.id}>{product.name}</div>
//             ))}
//         </div>
//     );
// };



