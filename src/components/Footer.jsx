import React from 'react';
import './footer.css';

import { SlSocialTwitter, SlSocialYoutube, SlSocialInstagram, SlSocialPintarest } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer >
      <div className='grid footer-container'>
        <ul className='list flex'>
          <li className='list-items'>Find a Store </li>
          <li>BECOME A MEMBER</li>
          <li>SIGN UP FOR EMAIL</li>
        </ul>
        <ul className='list flex'>
          <li>Get Help</li>
          <li>Order Status</li>
          <li>Delivery</li>
          <li>Returns</li>
        </ul>
        <ul className='list flex'>
          <li>About Pike</li>
          <li>News</li>
          <li>Careers</li>
        </ul>
        <div className='flex social-icons'>
          <SlSocialTwitter size={30} />
          <SlSocialYoutube size={30} />
          <SlSocialInstagram size={30} />
          <SlSocialPintarest size={30} />
        </div>
      </div>
      <div>
        <p>India
          © 2022 Pike, Inc. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer