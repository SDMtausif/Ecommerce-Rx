import React, { useState } from 'react';
import SignUpL from '../assets/SignUpL.png';
import { AiTwotoneStop } from "react-icons/ai";
import GoogleLogo from '../assets/GoogleLogo.png'
import {Link} from 'react-router'
const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({});

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};

    if (!user.username.trim()) {
      newErrors.username = 'Username is required';
    }

    const input = user.email.trim();
    const isValidEmail = /\S+@\S+\.\S+/.test(input);
    const isValidPhone = /^(\+?\d{1,3}[- ]?)?\d{10}$/.test(input);

    if (!input) {
      newErrors.email = 'Email or phone number is required';
    } else if (!isValidEmail && !isValidPhone) {
      newErrors.email = 'Enter a valid email or phone number';
    }

    if (!user.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();

    if (Object.keys(foundErrors).length > 0) {
      setError(foundErrors);
    } else {
      alert('✔ All data submitted successfully');
      setUser({ username: '', email: '', password: '' });
      setError({});
    }
  };

  const hasError = Object.keys(error).length > 0;

  return (
    <div className="flex items-center ">
      <div className=' w-[60%] pt-[60px] pb-[140px]'>
        <img className='min-h-[786px] min-w-[805px]' src={SignUpL} alt="Signup Illustration" />
      </div>
      <div className="mx-[200px]">
        <form onSubmit={handleSubmit}>
          <h1 className="font-Inter text-[30px] leading-[36px] tracking-[4%] font-medium text-black">
            Create an account
          </h1>
          <p className="font-Poppins text-4 leading-6 font-normal text-black pt-6 pb-[48px]">
            Enter your details below
          </p>


          <div>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleUser}
              className="border-b-2 min-w-[370px] leading-10 outline-0 text-[#7D8184] mb-[40px]"
              placeholder="Name"
            />
          </div>

   
          <div>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleUser}
              className="border-b-2 min-w-[370px] leading-10 outline-0 text-[#7D8184] mb-[40px]"
              placeholder="Email or Phone Number"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleUser}
              className="border-b-2 min-w-[370px] leading-10 outline-0 text-[#7D8184] mb-[40px]"
              placeholder="Password"
            />
          </div>

  
          <button
            type="submit"
            className={`bg-[#DB4444] px-[122px] py-4 text-white mt-[40px] mb-4 flex items-center justify-center gap-2 ${
              hasError ? 'opacity-90' : ''
            }`}
          >
            {hasError ? (
      <span className="text-4 px-[46px]  bg-w-4 py-1 font-extrabold "><AiTwotoneStop /></span>
    ) : (
      'Create Account'
    )}
          
          </button>
        <Link to="/signup" className=" border-2 border-black text-black max-w-[354px]  py-3 rounded flex items-center justify-center gap-4">
              <img className='w-5 h-5' src={GoogleLogo} alt="" />  <p> Sign up with Google</p>
        </Link>
         <div className='text-center mt-8 text-black'>
          <p className="font-medium leading-6 text-4 font-Poppins"> 
          Already have an account?
         <Link  to="/login" className="ml-2.5 border-b border-gray-500 hover:text-blue-600 transition">
          Log in
         </Link>
          </p>
         </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
