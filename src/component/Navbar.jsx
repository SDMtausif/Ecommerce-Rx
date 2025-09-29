import React from 'react'
import Container from '../container/Container';
import { Link, useLocation } from 'react-router';
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  
  const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/productData' },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/about' },
  { name: 'Sign Up', path: '/signup' },
];

  return (
    <nav className=" w-full bg-white shadow z-50">
      <Container>
          <div className=" px-6 py-4 flex justify-between items-center">
       
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
         Exclusive
        </Link>

        
        <div className="flex gap-6 font-Poppins text-black font-medium">
          {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`pb-1 ${
            isActive(item.path)
              ? 'border-b-2 border-black font-semibold'
              : 'hover:text-black'
          }`}
        >
          {item.name}
        </Link>
      ))}      
         
        </div>

        {/* Serch Box and Icon */}
        <div className='flex '>
          <search><IoSearchOutline /></search>
          <div className='flex  gap-[16px]'>
            <FaRegHeart size={20} />
            <Link to="Cart"><FaOpencart size={20} /></Link>
            <FaRegUser size={20} />
          </div>
        </div>
      </div>
        
    
      </Container>
    </nav>
  );
};


export default Navbar