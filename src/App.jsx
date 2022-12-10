import 'react-lazy-load-image-component/src/effects/blur.css';
import { Route, Routes } from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './modules/Home';
import Products from './modules/Products';

function App() {
 
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Products/>} path='/products'/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
