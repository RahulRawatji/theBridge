import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from 'react-icons/ai';

import './product.css';

const Products = () => {

  const products =  [
                  {'img': '/images/sample1.jpg', 'category':'shirt', 'style':'Drip', 'brand': 'Pike','rating':'4.5', 'price':'$4.99'},
                  {'img': '/images/sample4.jpg', 'category':'shirt', 'style':'Yolo', 'brand': 'Dans','rating':'3.5', 'price':'$6.99'},
                  {'img': '/images/sample9.jpg', 'category':'hoodie', 'style':'Swag', 'brand': 'Dans','rating':'4.5', 'title':'JEANS', 'price':'$5.99'},
                  {'img': '/images/sample2.jpg', 'category':'shirt', 'style':'Yolo', 'brand': 'Pike','rating':'4.5', 'price':'$2.99'},
                  {'img': '/images/sample4.jpg', 'category':'jeans', 'style':'Yolo', 'brand': 'Dans','rating':'3.5', 'price':'$6.99'},
                  {'img': '/images/sample5.jpg', 'category':'jacket', 'style':'Drip', 'brand': 'Pike','rating':'4.5', 'price':'$10.99'},
                  {'img': '/images/sample1.jpg', 'category':'shirt', 'style':'Drip', 'brand': 'Pike','rating':'4.5', 'price':'$4.99'},
                  {'img': '/images/sample2.jpg', 'category':'jeans', 'style':'Yolo', 'brand': 'Pike','rating':'4.5', 'price':'$2.99'},
                  {'img': '/images/sample5.jpg', 'category':'jeans', 'style':'Drip', 'brand': 'Pike','rating':'4.5', 'price':'$10.99'},
                  {'img': '/images/sample4.jpg', 'category':'shirt', 'style':'Yolo', 'brand': 'Dans','rating':'3.5', 'price':'$6.99'},
                  {'img': '/images/sample3.jpg', 'category':'shirt', 'style':'Swag', 'brand': 'Dans','rating':'3.5', 'price':'$3.99'},
                  {'img': '/images/sample1.jpg', 'category':'jeans', 'style':'Drip', 'brand': 'Pike','rating':'4.5', 'price':'$4.99'},
                  {'img': '/images/sample5.jpg', 'category':'shirt', 'style':'Drip', 'brand': 'Pike','rating':'4.5', 'price':'$10.99'},
                  {'img': '/images/sample3.jpg', 'category':'jeans', 'style':'Swag', 'brand': 'Dans','rating':'3.5', 'price':'$3.99'},
                  {'img': '/images/sample4.jpg', 'category':'shirt', 'style':'Drip', 'brand': 'Abibas','rating':'4.5', 'price':'$6.99'},
                  {'img': '/images/sample3.jpg', 'category':'shirt', 'style':'Swag', 'brand': 'Dans','rating':'3.5', 'price':'$3.99'},
                  {'img': '/images/sample7.jpg', 'category':'hoodie', 'style':'Drip', 'brand': 'Abibas','rating':'3.5', 'title':'HOODIES', 'price':'$5.99'},
                  {'img': '/images/sample4.jpg', 'category':'jeans', 'style':'Drip', 'brand': 'Abibas','rating':'4.5', 'price':'$6.99'},
                  {'img': '/images/sample5.jpg', 'category':'hoodie', 'style':'Drip', 'brand': 'Abibas','rating':'3.5', 'price':'$10.99'},
                  {'img':'/images/sample10.jpg', 'category':'jacket', 'style':'Swag', 'brand': 'Dans','rating' :'4.5', 'title':'T-SHIRT', 'price':'$4.99'},
                  {'img': '/images/sample7.jpg', 'category':'hoodie', 'style':'Swag', 'brand': 'Pike','rating':'5', 'title':'HOODIES', 'price':'$5.99'},
                  {'img': '/images/sample2.jpg', 'category':'jacket', 'style':'Yolo', 'brand': 'Pike','rating':'4.5', 'price':'$2.99'},
                  {'img': '/images/sample4.jpg', 'category':'shirt', 'style':'Drip', 'brand': 'Abibas','rating':'4.5', 'price':'$6.99'},
                  {'img': '/images/sample8.jpg', 'category':'hoodie', 'style':'Drip', 'brand': 'Tmw','rating':'2.5', 'title':'JACKETS', 'price':'$8.99'}];

  const filterd = products.map(product => {
      if(product.category==='shirt') return product
    });
  

  return (<div className='productMain'>
    <div className='productFilter'>
      <h1>Filter</h1>
      <div>
        <p>Under Development</p>
      </div>
    </div>
    <div className='productGrid'>
        {products.map(product => product && <div className='img__container'>
            <LazyLoadImage src={product.img} className='productImg' effect="blur" />
            <span className='productStyle'>{product.style} </span>
            <span className='productRating'>{product.rating} <AiFillStar style={{'color':'gold'}}/></span>
            <p className='bold font-sm'>{product.brand}</p>
            <div className='flex justify-between'>
            <p className=''>{product.price}</p>
           
            </div>
          </div>)}
    </div>
    </div>
  )
}

export default Products