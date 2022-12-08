import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [count, setCount] = useState(0)
    const images = ['/images/sample1.jpg','/images/sample2.jpg','/images/sample3.jpg','/images/sample4.jpg','/images/sample5.jpg'];
    const navigate = useNavigate();

    const gotoShop = () =>{
        navigate("/products");
    } 
  return (
    <main>
    <section className='hero'>
      <h2 className='title-hero'>BEAT THE BUZZER</h2>
      <p>Get your gifts on Time. Shop the perfect gift by 7 Dec and get by 27 Dec.</p>
      <button className='btn btn-hero' onClick={()=>gotoShop()}>Shop</button>
    </section>

    <section className='grid grid-col-2 hero-two'>
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
      <h2>Top Picks by Price</h2>
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