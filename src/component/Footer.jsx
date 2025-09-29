import React from 'react'
import Container from '../container/Container'
import {Link} from 'react-router'
import QRcode from '../assets/QRcode.png'
import GooglePlay from '../assets/GooglePlay.png'
import AppStore from '../assets/AppStore.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className='bg-black pt-[80px] pb-[124px] px-[135px]'>
      <Container>
         <div className='flex gap-[87px] text-white'>
           <div className=''>
      <h2 className="text-xl font-bold mb-2">Exclusive</h2>
      <p className="mb-1">Subscribe</p>
      <p className="mb-4">Get 10% off your first order</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="px-3 py-2 rounded  w-full  outline-0 border-[1px] border-white  text-3"
      />
    </div>

    {/* Support */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Support</h3>
      <ul className="space-y-2 text-4 leading-6">
        <li>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</li>
        <li>exclusive@gmail.com</li>
        <li>+88015-88888-9999</li>
      </ul>
    </div>

    {/* Account */}
    <div>
      <h3 className="text-lg font-semibold mb-4 ">Account</h3>
      <ul className="space-y-2">
        <li><a href="/account" className="   text-4 leading-6    hover:text-blue-400">My Account</a></li>
        <li><a href="/login" className="  text-4 leading-6    hover:text-blue-400">Login / Register</a></li>
        <li><a href="/cart" className="   text-4 leading-6    hover:text-blue-400">Cart</a></li>
        <li><a href="/wishlist" className="   text-4 leading-6    hover:text-blue-400">Wishlist</a></li>
        <li><a href="/shop" className="   text-4 leading-6    hover:text-blue-400">Shop</a></li>
      </ul>
    </div>

    {/* Quick Link */}
    <div>
      <h3 className="text-lg font-semibold mb-4 ">Quick Link</h3>
      <ul className="space-y-2">
        <li><a href="/privacy" className="  text-4 leading-6   hover:text-blue-400">Privacy Policy</a></li>
        <li><a href="/terms" className=" text-4 leading-6   hover:text-blue-400">Terms Of Use</a></li>
        <li><a href="/faq" className="  text-4 leading-6   hover:text-blue-400">FAQ</a></li>
        <li><a href="/contact" className=" text-4 leading-6   hover:text-blue-400">Contact</a></li>
      </ul>
    </div>
    <div>
      <p>Download App</p>
      <div> {/* second list */}
        <span>Save $3 with App New User Only</span>
        <div className='flex gap-1 max-w-[190px] max-h-[124px]'>
          <div><img src={QRcode} alt="../assets/QRcode.png" /></div>
          <div>
            <Link to='/' > <img src={GooglePlay} alt="../assets/GooglePlay.png" />  </Link>
            <Link to='/' > <img src={AppStore} alt="../assets/AppStore.png" />  </Link>
          </div>
        </div>
      </div>
      <div> {/* third list */}
         <ul className='flex gap-6'>
          <li><a href=""><FaFacebookF /></a></li>
          <li><a href=""><FaTwitter /></a></li>
          <li><a href=""><FaInstagram /></a></li>
          <li><a href=""><FaLinkedinIn /></a></li>
         </ul>
      </div>
    </div>
          </div>
    </Container>
    </footer>
    
  )
}

export default Footer
