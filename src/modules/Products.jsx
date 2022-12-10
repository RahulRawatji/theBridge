import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from 'react-icons/ai';

import './product.css';

const Products = () => {

  const products =  [
                  {'img': '/images/sample1.jpg', 'rating':'4.5', 'price':'$4.99'},
                  {'img': '/images/sample4.jpg', 'rating':'3.5', 'price':'$6.99'},
                  {'img': '/images/sample2.jpg', 'rating':'4.5', 'price':'$2.99'},
                  {'img': '/images/sample5.jpg', 'rating':'4.5', 'price':'$10.99'},
                  {'img': '/images/sample3.jpg', 'rating':'3.5', 'price':'$3.99'},
                  {'img': '/images/sample4.jpg', 'rating':'4.5', 'price':'$6.99'},
                  {'img': '/images/sample5.jpg', 'rating':'3.5', 'price':'$10.99'},
                  {'img': '/images/sample7.jpg', 'rating':'3.5', 'title':'HOODIES', 'price':'$5.99'},
                  {'img': '/images/sample10.jpg','rating' :'4.5', 'title':'T-SHIRT', 'price':'$4.99'},
                  {'img': '/images/sample9.jpg', 'rating':'4.5', 'title':'JEANS', 'price':'$5.99'},
                  {'img': '/images/sample7.jpg', 'rating':'5', 'title':'HOODIES', 'price':'$5.99'},
                  {'img': '/images/sample8.jpg', 'rating':'2.5', 'title':'JACKETS', 'price':'$8.99'}];

  return (<div className='productMain'>
    <div className='productFilter'>
      <h1>Filter</h1>
      <div>
        <p>Under Development</p>
      </div>
    </div>
    <div className='productGrid'>
        {products.map(product => <div className='img__container'>
            <LazyLoadImage src={product.img} className='productImg' effect="blur" />
            <span className='productRating'>{product.rating} <AiFillStar style={{'color':'gold'}}/></span>
            <p>{product.price}</p>
          </div>)}
    </div>
    </div>
  )
}

export default Products