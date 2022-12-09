import React from 'react';
import './navbar.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImCheckmark2 } from "react-icons/im";

const Navbar = () => {
  return (
    <nav className='flex'>
          <a href="/"><ImCheckmark2 size={20}/></a>
        <ul className='nav_list flex'>
            <li className='nav_items'>Men</li>
            <li className='nav_items'>Women</li>
            <li className='nav_items'>Sale</li>
        </ul>
        <AiOutlineShoppingCart/>
    </nav>
  )
}

export default Navbar