import React, { useState } from 'react';
import SignUpL from '../assets/SignUpL.png';
import { AiTwotoneStop } from "react-icons/ai";
import {Link} from 'react-router'
const Login = () => {

  return (
    <div className="flex items-center ">
      <div className=' w-[60%] pt-[60px] pb-[140px]'>
        <img className='min-h-[786px] min-w-[805px]' src={SignUpL} alt="Signup Illustration" />
      </div>
      <div className="mx-[290px]">
                <form >
                    <h1 className='text-[36px] font-medium font-Inter text-black  tracking-[4%]'>Log in to Exclusive</h1>
                    <p className='text-[16px] font-normal font-Poppins text-black pt-6 pb-[48px]'>Enter your details below</p>
        <div>
         
            <input
            type="text"
            placeholder="Email or Phone Number"
            className="border-b-2 text-black border-gray-300 px-2 py-2  min-w-[370px] block outline-0 mb-[40px]"
            required
          />    
           
    
        <input
           type="password"
           name="password"
           placeholder="Password *"
           autoComplete="new-password"
           className="border-b-2 text-black border-gray-300 px-2 py-2  min-w-[370px] block outline-0"
           required
           />
        </div>
       <div className='flex items-center justify-center mt-[40px] gap-[120px]'>

        <p className='text-[#DB4444] text-[16px] font-Poppins'>Forget Password?</p>
         <button
          type="submit"
          className="bg-[#DB4444]  text-white px-8 py-3 rounded hover:bg-red-600 transition"
        >
       Log in
        </button>
        
       </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
