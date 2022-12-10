import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useNavigate } from 'react-router-dom';

import './home.css';

const Home = () => {

  const [count, setCount] = useState(0)
  const images = ['/images/sample1.jpg', '/images/sample2.jpg', '/images/sample3.jpg', '/images/sample4.jpg', '/images/sample5.jpg'];
  const popularCategoriesImg = [
    {img: '/images/sample7.jpg', title:'HOODIES'},
    {img: '/images/sample10.jpg', title:'T-SHIRT'},
    {img: '/images/sample9.jpg', title:'JEANS'},
    {img: '/images/sample8.jpg',title:'JACKETS'}]
  const navigate = useNavigate();

  const gotoShop = () => {
    navigate("/products");
  };

  return (
    <main>
      <section className='hero'>
        <h2 className='title-hero'>BEAT THE BUZZER</h2>
        <p>Get your gifts on Time. Shop the perfect gift by 7 Dec and get by 27 Dec.</p>
        <button className='btn btn-hero' onClick={() => gotoShop()}>Shop</button>
      </section>

      <section className='hero-two'>
        <div className='flex hero-slider'>
          {images.map(image => <div className='img-container'>
            <LazyLoadImage src={image} className='hero-img' effect="blur" />
          </div>)}
        </div>
        <div className='flex hero-two-content'>
          <h1>Ready for the Holiday</h1>
          <p>Garb your Kicks Now</p>
        </div>
        <div>

        </div>
      </section>

      <section className='m-2'>
        <h2>CATEGORY</h2>
        <div className='category-section'>
          {popularCategoriesImg.map(item => {
            return( <>
           /// Make responsive for mobile
            <div className='category-img-container' key={item.title}>
            <Link to={'/products'} style={{textDecoration:'none', color:'#2D2D34'}}>
            <LazyLoadImage src={item.img} className='category_img' effect="blur" />
            <h3 className='text-center'>{item.title}</h3>
          </Link>
          </div>
          </>)
          })}
        </div>

      </section>

      <section className='m-2'>
        <h2>TOP PICKS BY TREND</h2>
        <div className='flex hero-slider'>
          {images.map(image => <div className='img-container'>
            <LazyLoadImage src={image} className='hero-img' effect="blur" />
          </div>)}
        </div>
      </section>
    </main>
  )
}

export default Home;