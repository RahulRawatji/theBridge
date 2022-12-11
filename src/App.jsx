import 'react-lazy-load-image-component/src/effects/blur.css';
import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactUs from './modules/ContactUs';
import Home from './modules/Home';
import Products from './modules/Products';
// const ContactUs  = lazy()

function App() {
 
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Products/>} path='/products'/>
          <Route element={<ContactUs/>} path='/contactUs'/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
