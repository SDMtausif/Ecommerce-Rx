
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Voucher from "../assets/Voucher.png"
import { Link } from 'react-router';
import Container from '../container/Container'
import PlayStation5 from '../assets/PlayStation5.png'
import WomansCollection from '../assets/WomansCollection.png'
import GucciPerfume from '../assets/GucciPerfume.png'
import Speakers from '../assets/Speakers.png'
import Truck from '../assets/Truck.png'
import Headphone from '../assets/Headphone.png'
import MoneyBack from '../assets/MoneyBack.png' 
import React, { useEffect, useState } from 'react'
import MusicEx from '../assets/MusicEx.png'
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const Home = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

const catagories =[
  {
    name:"Woman’s Fashion"
  },
  {
    name:"Men’s Fashion"
  },
  {
    name:"Electronics"
  },
  {
    name:"Home & Lifestyle"
  },
  {
    name:"Medicine"
  },
  {
    name:"Sports & Outdoor"
  },
  {
    name:"Baby’s & Toys"
  },
  {
    name:"Groceries & Pets"
  },
  {
    name:"Health & Beauty"
  }
]
{/* This part is working for Best Selling Products */}
 const [products, setProducts] = useState([]);
 const [error, setError] = useState('');

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {    
      const shuffled = data.sort(() => 0.5 - Math.random());
      const randomFour = shuffled.slice(0, 4);
      setProducts(randomFour);
    })
    .catch(err => setError(err.message));
}, []);
{/* This part is going to play with Explore Our Product section */}
      
const [ourproduct, setOurproduct] = useState([]);
const [producterr, setProducterr] = useState('');

useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then(element=>{
    const shuffled = element.sort(()=>0.5-Math.random());
    const randomproducts = shuffled.slice(0,8);
    setOurproduct(randomproducts);
   
   })
    .catch(err=>setProducterr(err.message))
},[])
  return (
       <Container>

        <section>
          <div className='flex w-full gap-[45px]'> {/* the right border should be create by using after before */}

        {/* Right part of the section */}      
         <div className='w-[30%] relative after:absolute after:top-[0px] after:right-0 after:w-[2px] after:h-[360px] after:bg-gray-200'>
              {catagories.map((catagories) =>
              <p className='mb-[16px] font-Poppins text-[16px] font-normal leading-[24px] text-black'>{catagories.name}</p>
              )}
         </div>
    
       {/* Left part of the section */}
      <div className='w-[70%] mt-[40px]'>

        <Slider {...settings}>
       
        <div><Link to="*/"> <img src={Voucher} alt="" /> </Link></div>
        <div><Link to="*/"> <img src={Voucher} alt="" /> </Link></div>
        <div><Link to="*/"> <img src={Voucher} alt="" /> </Link></div>
        <div><Link to="*/"> <img src={Voucher} alt="" /> </Link></div>
        <div><Link to="*/"> <img src={Voucher} alt="" /> </Link></div>
       
        </Slider>
      </div>
      </div>
        </section>
      
        <section>  {/*  browse by category */}
      <div className='border-b-[2px] border-[#B3B3B3] mb-[33px]'>
     <div className='mt-[86px] mb-[95px] '>
     
        <div className='flex items-center gap-2.5'>
            <div className='bg-[#DB4444] h-[40px] w-[20px] rounded shadow-[0px_5px_5px_rgba(0,0,0,0.3)]'></div>
            <p className='text-[#DB4444] text-[16px] font-Poppins font-bold'>Categories</p>
        </div>
        <div className='flex justify-between mb-[60px]'>
          <p className='font-semibold text-black text-[36px] leading-18 tracking-[4%]' >Browse By Category</p>
          <div className='flex gap-2'>
            <button>hfjdgfu</button> {/* reminder:  icon  */}
            <button>eeeee</button>
          </div>
        </div>



        <div className='grid grid-cols-6 gap-[30px]'>{/* grid-rows- ...... if need */}

        <div className="group flex flex-col items-center border border-gray-400 pt-[25px] pb-[24px] pr-[57px] pl-[57px] hover:bg-[#DB4444] rounded transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          className="group-hover:stroke-white transition-all duration-300"
         >
        <g clipPath="url(#clip0_12095_430)">
      <path
        d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
        className="stroke-black group-hover:stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6666 7H31.1354"
        className="stroke-black group-hover:stroke-white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 44.0052V44.0305"
        className="stroke-black group-hover:stroke-white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="15.1666"
        y1="39.8333"
        x2="40.8333"
        y2="39.8333"
        className="stroke-black group-hover:stroke-white"
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_12095_430">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
        </svg>
         <p className="text-[16px] leading-[24px] font-Poppins font-normal pt-4 pb-6 text-gray-800 group-hover:text-white transition-all duration-300">
            Phones </p>
        </div>

         <div className='group flex flex-col items-center border border-gray-400 pt-[25px] pb-[24px] pr-[57px] pl-[57px] hover:bg-[#DB4444] rounded transition-all duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg"
           width="56" 
           height="56" 
           viewBox="0 0 56 56" 
           fill="none"
           className="group-hover:stroke-white transition-all duration-300">
          <g clip-path="url(#clip0_12095_953)">
          <path d="M46.6667 9.33331H9.33333C8.04467 9.33331 7 10.378 7 11.6666V35C7 36.2886 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2886 49 35V11.6666C49 10.378 47.9553 9.33331 46.6667 9.33331Z"
           stroke="black" 
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round"
           className="stroke-black group-hover:stroke-white"/>
           <path d="M16.3334 46.6667H39.6667"
           stroke="black" stroke-width="2" 
           stroke-linecap="round" 
           stroke-linejoin="round"
           className="stroke-black group-hover:stroke-white"/>
           <path d="M21 37.3333V46.6666"
           stroke="black"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round"
           className="stroke-black group-hover:stroke-white"/>
           <path d="M35 37.3333V46.6666"
           stroke="black"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round"
           className="stroke-black group-hover:stroke-white"/>
           <path d="M8 32H48"
           stroke="black"
           stroke-width="2"
           stroke-linecap="round"
           className="stroke-black group-hover:stroke-white"/>
          </g>
          <defs>
          <clipPath id="clip0_12095_953">
          <rect width="56" height="56" fill="white"/>
          </clipPath>
          </defs>
          </svg>
         <p className='text-[16px] leading-[24px] font-Poppins text-4 font-normal pt-4 pb-6 group-hover:text-white'>Computers</p>
          </div>

          <div   className='group flex flex-col items-center border border-gray-400 pt-[25px] pb-[24px] pr-[57px] pl-[57px] hover:bg-[#DB4444] rounded transition-all duration-300'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="56" 
                height="56" 
                viewBox="0 0 56 56" 
                fill="none"
                className="group-hover:stroke-white transition-all duration-300"
                >
               <g clip-path="url(#clip0_12095_530)">
               <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" 
               stroke="black" 
               stroke-width="2" 
               stroke-linecap="round" 
               stroke-linejoin="round"
               className="group-hover:stroke-white transition-all duration-300"
                />
              <path d="M21 42V49H35V42" 
               stroke="black" 
               stroke-width="2" 
               stroke-linecap="round" 
               stroke-linejoin="round" 
               className="group-hover:stroke-white transition-all duration-300"/>
              <path d="M21 14V7H35V14" 
              stroke="black" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              className="group-hover:stroke-white transition-all duration-300"/>
             </g>
             <defs>
             <clipPath id="clip0_12095_530">
             <rect width="56" height="56" fill="white"/>
             </clipPath>
             </defs>
                </svg>
             <p className='text-[16px] leading-[24px] font-Poppins font-normal pt-4 pb-6 text-gray-800 group-hover:text-white transition-all duration-300'>SmartWatch</p>
         </div>

          <div className='group flex flex-col items-center border border-gray-400 pt-[25px] pb-[24px] pr-[57px] pl-[57px] hover:bg-[#DB4444] rounded transition-all duration-300'>
                <svg 
                width="56" 
                height="56" 
                viewBox="0 0 56 56" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:stroke-white transition-all duration-300">
                <g clip-path="url(#clip0_913_4363)">
                <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334"
                stroke="black"
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                className="group-hover:stroke-white transition-all duration-300"/>
                <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" 
                stroke="black" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                className="group-hover:stroke-white transition-all duration-300"/>
                </g>
                <defs>
                <clipPath id="clip0_913_4363">
                <rect width="56" height="56" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              <p className='text-[16px] leading-[24px] font-Poppins font-normal pt-4 pb-6 text-gray-800 group-hover:text-white transition-all duration-300'>Camera</p>
          </div>

          <div  className='group flex flex-col items-center border border-gray-400 pt-[25px] pb-[24px] pr-[57px] pl-[57px] hover:bg-[#DB4444] rounded transition-all duration-300'>
            <svg 
             xmlns="http://www.w3.org/2000/svg"
             width="56" 
             height="56" 
             viewBox="0 0 56 56" 
             fill="none"
             className="group-hover:stroke-white transition-all duration-300">
               <g clip-path="url(#clip0_12095_544)">
               <path d="M16.3333 30.3333H14C11.4227 30.3333 9.33331 32.4227 9.33331 35V42C9.33331 44.5773 11.4227 46.6666 14 46.6666H16.3333C18.9106 46.6666 21 44.5773 21 42V35C21 32.4227 18.9106 30.3333 16.3333 30.3333Z" 
               stroke="black"
               stroke-width="2" 
               stroke-linecap="round" 
               stroke-linejoin="round"
               className="group-hover:stroke-white transition-all duration-300"/>
               <path d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z" 
               stroke="black"
               stroke-width="2" 
               stroke-linecap="round" 
               stroke-linejoin="round"
               className="group-hover:stroke-white transition-all duration-300"/>
               <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3013 14.8007 14.8007C18.3013 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6986 11.3 41.1993 14.8007C44.7 18.3013 46.6666 23.0493 46.6666 28V35" 
               stroke="black"
               stroke-width="2" 
               stroke-linecap="round" 
               stroke-linejoin="round"
               className="group-hover:stroke-white transition-all duration-300"/>
               </g>
               <defs>
               <clipPath id="clip0_12095_544">
               <rect width="56" height="56" fill="white"/>
               </clipPath>
               </defs>
            </svg> 
           <p className='text-[16px] leading-[24px] font-Poppins font-normal pt-4 pb-6 text-gray-800 group-hover:text-white transition-all duration-300'>HeadPhones</p>
          </div>

          <div  className='group flex flex-col items-center border border-gray-400 pt-[25px] pb-[24px] pr-[57px] pl-[57px] hover:bg-[#DB4444] rounded transition-all duration-300'>{/**css copy from here and add padiing */}
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"className="group-hover:stroke-white transition-all duration-300" >
             <g clip-path="url(#clip0_12095_58)">
             <path d="M46.6667 14H9.33332C6.75599 14 4.66666 16.0893 4.66666 18.6667V37.3333C4.66666 39.9107 6.75599 42 9.33332 42H46.6667C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6667 14Z" 
             stroke="black" 
             stroke-width="2" 
             stroke-linecap="round" 
             stroke-linejoin="round" 
             className="group-hover:stroke-white transition-all duration-300"/>
             <path d="M14 28H23.3333M18.6667 23.3333V32.6666" 
             stroke="black" 
             stroke-width="2" 
             stroke-linecap="round" 
             stroke-linejoin="round" 
             className="group-hover:stroke-white transition-all duration-300"/>
             <path d="M35 25.6667V25.6909" 
             stroke="black" 
             stroke-width="3" 
             stroke-linecap="round" 
             stroke-linejoin="round" 
             className="group-hover:stroke-white transition-all duration-300"/>
             <path d="M42 30.3333V30.3574" 
             stroke="black" 
             stroke-width="3" 
             stroke-linecap="round" 
             stroke-linejoin="round" 
             className="group-hover:stroke-white transition-all duration-300"/>
             </g>
            <defs>
            <clipPath id="clip0_12095_58">
            <rect width="56" height="56" fill="white"/>
            </clipPath>
            </defs>
           </svg>
           <p className='text-[16px] leading-[24px] font-Poppins font-normal pt-4 pb-6 text-gray-800 group-hover:text-white transition-all duration-300'>Gaming</p>
          </div>

        </div>
     </div>
     </div>
        </section>
        
        <section>  {/* Best Selling Products */}
       <div className='flex items-center gap-2.5'>
            <div className='bg-[#DB4444] h-[40px] w-[20px] rounded shadow-[0px_5px_5px_rgba(0,0,0,0.3)]'></div>
            <p className='text-[#DB4444] text-[16px] font-Poppins font-bold'>This Month</p>
      </div>

      <div className='flex justify-between items-center mb-[60px]'>
        <p className='font-semibold text-black text-[36px] leading-18 tracking-[4%]'>Best Selling Products</p>
           <Link to="/ProductData"> <button className="text-white font-Poppins text-[14px] leading-[24px] px-[48px] py-[16px] bg-[#DB4444] rounded">View All</button></Link>
      </div>

      {error && (
            <p className="text-red-500  text-center text-5xl font-semibold py-40"> FAILD  TO FETCH API o(￣┰￣*)ゞ </p>
         )}
      <div className="grid grid-cols-4 gap-6">
        
       {products.map(product => (
            <Link to='/ProductData' key={product.id}> {/* link is added just for now */}
              <div className="bg-white rounded-[4px] shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-[250px] rounded-[4px] flex items-center justify-center bg-gray-100">
                    <img src={product.image} alt={product.title} className="max-h-[180px] object-contain" />
              </div>
        <div className="p-4 h-[150px] flex flex-col justify-between">
          <p className="text-[16px] font-medium text-gray-800">{product.title}</p>
          <span className="text-Primary font-light text-[16px]">
            ${product.price} {product.oldPrice && <del className="text-gray-400">${product.oldPrice}</del>}
          </span>
          <div className="flex items-center pt-2">
            {[...Array(Math.round(product.rating.rate))].map((_, i) => (
              <FaStar key={i} className="text-[#FFAD33]" />
            ))}
            <span className="text-[#7D8184] text-[14px] font-semibold pl-2">({product.rating.count})</span>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

    
        </section>
      
        <section> {/*Explore Our Products */}
           <img src={MusicEx} alt="" className="pt-[140px] pb-[71px]"/>
            <div>
                <div className='flex items-center gap-2.5'>
            <div className='bg-[#DB4444] h-[40px] w-[20px] rounded shadow-[0px_5px_5px_rgba(0,0,0,0.3)]'></div>
            <p className='text-[#DB4444] text-[16px] font-Poppins font-bold'>Our Products</p>
        </div>
        <div className='flex justify-between mb-[60px]'>
          <p className='font-semibold text-black text-[36px] leading-18 tracking-[4%]' >Explore Our Products</p>
          <div className='flex gap-2'>
            <button>hfjdgfu</button> {/* reminder:  icon  */}
            <button>eeeee</button>
          </div>
        </div>

         {producterr && (
             <p className="text-red-500  text-center text-5xl font-semibold py-40"> FAILD  TO FETCH API o(￣┰￣*)ゞ </p>
         )}

         <div className="grid grid-cols-4 gap-6">
                {ourproduct.map(ourproduct=>(
                  <div className="bg-white rounded-[4px] shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"> 
                     <div className="relative h-[250px] rounded-[4px] flex items-center justify-center bg-gray-100 group">
                        <img src={ourproduct.image} alt="" className="max-h-[180px] py-[35px] px-[40px]" />
                        {/* a Link need to added to add it to the cart this feature will be added later */}
                          <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black w-full text-white font-Poppins text-4 leading-6 font-medium py-2 opacity-0 group-hover:opacity-100 transition duration-300 ">Add To Cart </button>
                     </div>
                    <div className="px-3 h-[150px] py-4">
                      <p className="font-Poppins text-4 leading-6 text-black  pb-2">{ourproduct.title}</p>
                      <div className="flex items-center gap-3">
                        ${ourproduct.price}
                         <div className="flex items-center">
                             {[...Array(Math.round(ourproduct.rating.rate))].map((_, i) => (
                                <FaStar key={i} className="text-[#FFAD33]" />
                                                   ))}
                       <span className="text-[#7D8184] text-[14px] font-semibold pl-2">({ourproduct.rating.count})</span>
                          </div>
                         <del>{ourproduct.oldPrice}</del>
                      </div>
                    </div>
                  </div>
                ))}
         </div>

          <div className="flex justify-center">
            <Link to='/productdata'> <button className="bg-[#DB4444] py-4 px-[48px] text-white text-4 font-Poppins font-medium leading-6 mt-[60px] mb-[88px]">View All Products</button></Link>
          </div>

            </div>
        </section>





    <section>
        <div className='mt-[42px]'>
           
       <div className='flex items-center gap-2.5'>
            <div className='bg-[#DB4444] h-[40px] w-[20px] rounded shadow-[0px_5px_5px_rgba(0,0,0,0.3)]'></div>
            <p className='text-[#DB4444] text-[16px] font-Poppins font-bold'>Featured</p>
       </div>
           

        <div className='flex justify-between mb-[60px]'>
            <p className='font-semibold text-black text-[36px] leading-18 tracking-[4%] text-left'>New Arrival</p>
        </div>

         <div className='flex gap-[30px]'>
            <div><img src={PlayStation5} alt="" /></div>
            <div>
                <div className='mb-[32px]'>
                    <img src={WomansCollection} alt="" />
                </div>
                <div className='flex gap-[30px]'>
                    <div><img src={Speakers} alt="" /></div>
                    <div><img src={GucciPerfume} alt="" /></div>
                </div>
            </div>
         </div>
         
         <div className='flex justify-between text-center items-center mt-[155px] mb-[194px]'>
            <div>
                <div className='flex justify-center'>
                    <img  className='w-[80px] h-[80px]' src={Truck} alt="" />
                </div>
                <p className='font-semibold font-Poppins text-[20px] leading-6 pb-2 pt-6'>FREE AND FAST DELIVERY</p>
                <span className='font-normal font-Poppins text-[14px] leading-[21px]'>Free delivery for all orders over $140</span>
            </div>
            <div>
                <div className='flex justify-center'>
                    <img className='w-[80px] h-[80px]' src={Headphone} alt="" />
                </div>
                <p className='font-semibold font-Poppins text-[20px] leading-6 pb-2 pt-6'>24/7 CUSTOMER SERVICE</p>
                <span className='font-normal font-Poppins text-[14px] leading-[21px]'>Friendly 24/7 customer support</span>
            </div>
            <div>
                <div className='flex justify-center'>
                   <img  className='w-[80px] h-[80px]' src={MoneyBack} alt="" />
                </div>
                <p className='font-semibold font-Poppins text-[20px] leading-6 pb-2 pt-6'>MONEY BACK GUARANTEE</p>
                <span className='font-normal font-Poppins text-[14px] leading-[21px]'>We reurn money within 30 days</span>
            </div>
         </div>
        </div>
       
    </section>



    </Container>

  )
}

export default Home