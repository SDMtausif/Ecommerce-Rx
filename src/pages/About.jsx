import React, { useState } from 'react';
import SignUpL from '../assets/SignUpL.png';
import { Link, useLocation } from 'react-router';
import Container from '../container/Container';

const About = () => {

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const About = [
    { name: 'Home /', path: '/' },
    { name: ' About', path: '/about' },
  ];
  return (

   <div> {/* ... */}
   <section>
    <Container>
      <div className='pt-[110px]'>
         {About.map((e) => (
                    <Link
                      key={e.path}
                      to={e.path}
                      className={`text-[14px]  ${
                        isActive(e.path) ? 'font-semibold' : 'font-normal'
                      }`}
                    >
                      {e.name}
                    </Link>
                  ))}
      </div>
    </Container>
   </section>
   <section> {/*... (^ ^) ~~\ */}
        <div className="flex ">
        <div className="ml-[375px] mr-[75px] mt-[267px] text-black">
             <h1 className='font-Inter font-semibold text-[54px] leading-[64px] mb-[40px]'>Our Story</h1>
            
            <div className='font-Poppins max-w-[660px] text-4 leading-6 space-y-6 '>
               <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense 
              in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 
              10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            
             <p>Exclusive has more than 1 Million products to offer, growing at a very fast.
               Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
         </div>
        <div className=' w-[60%] pt-[60px] pb-[140px]'>
        <img className='min-h-[786px] min-w-[805px]' src={SignUpL} alt="Signup Illustration" />
        </div>
      
    </div>
   </section> 
    
    <Container>
     <div className='flex flex-wrap'>
       <div className="group p-4 bg-white rounded-lg hover:bg-[#DB4444] max-w-[270px] mx-auto text-center transition flex flex-col items-center justify-center border-2 border-gray-200">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    className="w-20 h-20"
  >

    <path
      className="fill-gray-800 group-hover:fill-gray-300 transition-colors duration-300"
      opacity="0.3"
      d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
    />

    <circle
      className="fill-black group-hover:fill-white transition-colors duration-300"
      cx="40"
      cy="40"
      r="29"
    />

    <path
      className="fill-white group-hover:fill-black transition-colors duration-300"
      d="M31.667 31.6667V28.3334C31.667 27.3682 31.9464 26.4236 32.4714 25.6137C32.9965 24.8038 33.7447 24.1632 34.6258 23.7691C35.5069 23.3751 36.4832 23.2445 37.4369 23.3931C38.3906 23.5418 39.2809 23.9633 40.0003 24.6067C40.7197 23.9633 41.61 23.5418 42.5637 23.3931C43.5174 23.2445 44.4937 23.3751 45.3749 23.7691C46.256 24.1632 47.0042 24.8038 47.5292 25.6137C48.0543 26.4236 48.3336 27.3682 48.3337 28.3334V31.6667H50.8337C51.4967 31.6667 52.1326 31.9301 52.6014 32.399C53.0703 32.8678 53.3337 33.5037 53.3337 34.1667V50.8417C53.3337 52.3866 52.72 53.8682 51.6276 54.9606C50.5352 56.053 49.0535 56.6667 47.5087 56.6667H33.3337C31.5655 56.6667 29.8699 55.9643 28.6196 54.7141C27.3694 53.4639 26.667 51.7682 26.667 50.0001V34.1667C26.667 33.5037 26.9304 32.8678 27.3992 32.399C27.8681 31.9301 28.504 31.6667 29.167 31.6667H31.667Z"
    />
  </svg>

  <h1 className="font-Inter pt-6 pb-3 font-bold text-[32px] leading-[30px] text-black group-hover:text-white">
    10.5k
  </h1>
  <p className="text-4 font-normal font-Poppins leading-6 group-hover:text-white">
    Sellers active on our site
  </p>
       </div>

       <div className="group p-4 bg-white rounded-lg hover:bg-[#DB4444] max-w-[270px] mx-auto text-center transition flex flex-col items-center justify-center border-2 border-gray-200">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    className="w-20 h-20"
  >
    <path
      className="fill-gray-800 group-hover:fill-gray-300 transition-colors duration-300"
      opacity="0.3"
      d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
    />
    <circle
      className="fill-black group-hover:fill-white transition-colors duration-300"
      cx="40"
      cy="40"
      r="29"
    />
    <path
      className="fill-white group-hover:fill-black transition-colors duration-300"
      d="M31.667 31.6667V28.3334C31.667 27.3682 31.9464 26.4236 32.4714 25.6137C32.9965 24.8038 33.7447 24.1632 34.6258 23.7691C35.5069 23.3751 36.4832 23.2445 37.4369 23.3931C38.3906 23.5418 39.2809 23.9633 40.0003 24.6067C40.7197 23.9633 41.61 23.5418 42.5637 23.3931C43.5174 23.2445 44.4937 23.3751 45.3749 23.7691C46.256 24.1632 47.0042 24.8038 47.5292 25.6137C48.0543 26.4236 48.3336 27.3682 48.3337 28.3334V31.6667H50.8337C51.4967 31.6667 52.1326 31.9301 52.6014 32.399C53.0703 32.8678 53.3337 33.5037 53.3337 34.1667V50.8417C53.3337 52.3866 52.72 53.8682 51.6276 54.9606C50.5352 56.053 49.0535 56.6667 47.5087 56.6667H33.3337C31.5655 56.6667 29.8699 55.9643 28.6196 54.7141C27.3694 53.4639 26.667 51.7682 26.667 50.0001V34.1667C26.667 33.5037 26.9304 32.8678 27.3992 32.399C27.8681 31.9301 28.504 31.6667 29.167 31.6667H31.667Z"
    />
  </svg>

  <h1 className="font-Inter pt-6 pb-3 font-bold text-[32px] leading-[30px] text-black group-hover:text-white">
    10.5k
  </h1>
  <p className="text-4 font-normal font-Poppins leading-6 group-hover:text-white">
    Sellers active on our site
  </p>
       </div>

       <div className="group p-4 bg-white rounded-lg hover:bg-[#DB4444] max-w-[270px] mx-auto text-center transition flex flex-col items-center justify-center border-2 border-gray-200">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    className="w-20 h-20"
  >
    <path
      className="fill-gray-800 group-hover:fill-gray-300 transition-colors duration-300"
      opacity="0.3"
      d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
    />
    <circle
      className="fill-black group-hover:fill-white transition-colors duration-300"
      cx="40"
      cy="40"
      r="29"
    />
  
    <path
      className="fill-white group-hover:fill-black transition-colors duration-300"
      d="M31.667 31.6667V28.3334C31.667 27.3682 31.9464 26.4236 32.4714 25.6137C32.9965 24.8038 33.7447 24.1632 34.6258 23.7691C35.5069 23.3751 36.4832 23.2445 37.4369 23.3931C38.3906 23.5418 39.2809 23.9633 40.0003 24.6067C40.7197 23.9633 41.61 23.5418 42.5637 23.3931C43.5174 23.2445 44.4937 23.3751 45.3749 23.7691C46.256 24.1632 47.0042 24.8038 47.5292 25.6137C48.0543 26.4236 48.3336 27.3682 48.3337 28.3334V31.6667H50.8337C51.4967 31.6667 52.1326 31.9301 52.6014 32.399C53.0703 32.8678 53.3337 33.5037 53.3337 34.1667V50.8417C53.3337 52.3866 52.72 53.8682 51.6276 54.9606C50.5352 56.053 49.0535 56.6667 47.5087 56.6667H33.3337C31.5655 56.6667 29.8699 55.9643 28.6196 54.7141C27.3694 53.4639 26.667 51.7682 26.667 50.0001V34.1667C26.667 33.5037 26.9304 32.8678 27.3992 32.399C27.8681 31.9301 28.504 31.6667 29.167 31.6667H31.667Z"
    />
  </svg>

  <h1 className="font-Inter pt-6 pb-3 font-bold text-[32px] leading-[30px] text-black group-hover:text-white">
    10.5k
  </h1>
  <p className="text-4 font-normal font-Poppins leading-6 group-hover:text-white">
    Sellers active on our site
  </p>
       </div>


       <div className="group p-4 bg-white rounded-lg hover:bg-[#DB4444] max-w-[270px] mx-auto text-center transition flex flex-col items-center justify-center border-2 border-gray-200">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    className="w-20 h-20"
  >
    <path
      className="fill-gray-800 group-hover:fill-gray-300 transition-colors duration-300"
      opacity="0.3"
      d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
    />
    <circle
      className="fill-black group-hover:fill-white transition-colors duration-300"
      cx="40"
      cy="40"
      r="29"
    />
    <path
      className="fill-white group-hover:fill-black transition-colors duration-300"
      d="M31.667 31.6667V28.3334C31.667 27.3682 31.9464 26.4236 32.4714 25.6137C32.9965 24.8038 33.7447 24.1632 34.6258 23.7691C35.5069 23.3751 36.4832 23.2445 37.4369 23.3931C38.3906 23.5418 39.2809 23.9633 40.0003 24.6067C40.7197 23.9633 41.61 23.5418 42.5637 23.3931C43.5174 23.2445 44.4937 23.3751 45.3749 23.7691C46.256 24.1632 47.0042 24.8038 47.5292 25.6137C48.0543 26.4236 48.3336 27.3682 48.3337 28.3334V31.6667H50.8337C51.4967 31.6667 52.1326 31.9301 52.6014 32.399C53.0703 32.8678 53.3337 33.5037 53.3337 34.1667V50.8417C53.3337 52.3866 52.72 53.8682 51.6276 54.9606C50.5352 56.053 49.0535 56.6667 47.5087 56.6667H33.3337C31.5655 56.6667 29.8699 55.9643 28.6196 54.7141C27.3694 53.4639 26.667 51.7682 26.667 50.0001V34.1667C26.667 33.5037 26.9304 32.8678 27.3992 32.399C27.8681 31.9301 28.504 31.6667 29.167 31.6667H31.667Z"
    />
  </svg>

  <h1 className="font-Inter pt-6 pb-3 font-bold text-[32px] leading-[30px] text-black group-hover:text-white">
    10.5k
  </h1>
  <p className="text-4 font-normal font-Poppins leading-6 group-hover:text-white">
    Sellers active on our site
  </p>
       </div>

     </div>
{/*
      <div>
       <div>weweew</div>
      <div>rererer</div>
      <div>rwrre</div>
      <div>rerererere</div>
     </div>
      <div>
       <div>weweew</div>
      <div>rererer</div>
      <div>rwrre</div>
      <div>rerererere</div>
     </div>*/}
    </Container>
   </div>
  )};
  export default About