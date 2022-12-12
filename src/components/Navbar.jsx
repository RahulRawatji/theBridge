import React from 'react';
import './navbar.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImCheckmark2 } from "react-icons/im";

const Navbar = () => {
  return (
    <nav>
        <a href="/"><ImCheckmark2 size={20}/></a>
        <div className='main_menu'>
            <div className='menu_item'>
              <a href='#'>Men</a>
              <div className='menu_sub'>
                <div>
                  <h4>Topwear</h4>
                <ul className='list_items'>
                  <li><a href="#">T-Shirts</a></li>
                  <li><a href="#">Shirts</a></li>
                  <li><a href="#">Vest</a></li>
                  <li><a href="#">Kurtas</a></li>
                  <li><a href="#">Jackets</a></li>
                  <li><a href="#">Hoodies</a></li>
                  <li><a href="#">Sweaters</a></li>
                </ul>
                </div>
                <div>
                  <h4>Footwear</h4>
                <ul className='list_items'>
                  <li><a href="#">Casual Shoes</a></li>
                  <li><a href="#">Sports Shoes</a></li>
                  <li><a href="#">Sneakers</a></li>
                  <li><a href="#">Sandles</a></li>
                  <li><a href="#">Slip-Ons</a></li>
                </ul>

                </div>
                <div>
                  <h4>Bottomwear</h4>
                <ul className='list_items'>
                  <li><a href="#">Jeans</a></li>
                  <li><a href="#">Pajamas</a></li>
                  <li><a href="#">Jogers</a></li>
                  <li><a href="#">Shorts</a></li>
                  <li><a href="#">Breif</a></li>
                  <li><a href="#">Trunks</a></li>
                </ul>

                </div>                
                <div>
                  <h4>Sports & Activewear</h4>
                <ul className='list_items'>
                  <li><a href="#">Activewear T-Shirt</a></li>
                  <li><a href="#">Activewear Shorts</a></li>
                  <li><a href="#">Activewear Shoes</a></li>
                </ul>

                </div>
              </div>
            </div>
            
            <div className='menu_item'>
              <a href='#'>Women</a>
              <div className='menu_sub'>
                <div>
                  <h4>Topwear</h4>
                <ul className='list_items'>
                  <li><a href="#">T-Shirts</a></li>
                  <li><a href="#">Shirts</a></li>
                  <li><a href="#">Vest</a></li>
                  <li><a href="#">Kurtas</a></li>
                  <li><a href="#">Jackets</a></li>
                  <li><a href="#">Hoodies</a></li>
                  <li><a href="#">Sweaters</a></li>
                </ul>
                </div>
                <div>
                  <h4>Bottomwear</h4>
                <ul className='list_items'>
                  <li><a href="#">Jeans</a></li>
                  <li><a href="#">Pajamas</a></li>
                  <li><a href="#">Jogers</a></li>
                  <li><a href="#">Shorts</a></li>
                  <li><a href="#">Breif</a></li>
                  <li><a href="#">Trunks</a></li>
                </ul>
                </div>
              </div>
            </div>
            
            <div className='menu_item'>
              <a href="#">Sale</a>
              {/* <div className='menu_sub'>
                <ul>
                  <li>Hoodies</li>
                  <li>Jackets</li>
                  <li>Hi</li>
                </ul>
              </div> */}
            </div>
        </div>
        <AiOutlineShoppingCart size={25} onClick={()=>console.log("kart")} style={{cursor:'pointer'}}/>
    </nav>
  )
}

export default Navbar