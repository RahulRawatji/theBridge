import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './product.css';

const Products = () => {

  const products =  [
                  {'img': '/images/sample1.jpg', 'price':'$4.99'},
                  {'img': '/images/sample2.jpg', 'price':'$2.99'},
                  {'img': '/images/sample3.jpg', 'price':'$3.99'},
                  {'img': '/images/sample4.jpg', 'price':'$6.99'},
                  {'img': '/images/sample5.jpg', 'price':'$10.99'},
                  {'img': '/images/sample7.jpg', 'title':'HOODIES', 'price':'$5.99'},
                  {img: '/images/sample10.jpg', title:'T-SHIRT', 'price':'$4.99'},
                  {img: '/images/sample9.jpg', title:'JEANS', 'price':'$5.99'},
                  {img: '/images/sample8.jpg',title:'JACKETS', 'price':'$8.99'}];

  return (
    <div className='productGrid'>
        {products.map(product => <div className='img__container'>
            <LazyLoadImage src={product.img} className='productImg' effect="blur" />
            <p>{product.price}</p>
          </div>)}
    </div>
  )
}

export default Products