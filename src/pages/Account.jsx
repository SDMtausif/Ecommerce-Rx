import React from 'react'
import { Link, useLocation } from 'react-router';
import Container from '../container/Container';
const Account = () => {
    const location = useLocation();
  const isActive = (path) => location.pathname === path;
     const MyAccount = [
    { name: 'Home /', path: '/' },
    { name: 'My Account', path: '/Account' },
  ];
  return (
    <section>
        <Container>
         <div className="flex items-center justify-between text-black">
           <div className="flex gap-2  font-Poppins text-[14px]"> {/* Same concept=> Active design from Navbar */}
           {MyAccount.map((e) => (
            <Link
              key={e.path}
              to={e.path}
              className={`text-[14px] ${
                isActive(e.path) ? 'font-semibold' : 'font-normal'
              }`}
            >
              {e.name}
            </Link>
          ))}
        </div>
          <p>Welcome!</p>
        </div>

        <div className='w-[100%] flex'>
            <div className='w-[20%] space-y-4'>
                <p className='font-Poppins font-medium text-[16px] leading-[24px] text-black'>Manage My Account</p>
                <ul className='ml-[10%] text-[16px] font-Poppins font-normal text-gray-700'>
                    <li>My Profile</li>
                    <li>Address Book</li>
                    <li>My Payment Options</li>
                </ul>
                <p className='font-Poppins font-medium text-[16px] leading-[24px] text-black'>My Orders</p>
                <ul className='ml-[10%] text-[16px] font-Poppins font-normal text-gray-700'>
                    <li>My Returns</li>
                    <li>My Cancellations</li>
                </ul >
                <p className='font-Poppins font-medium text-[16px] leading-[24px] text-black'>My WishList</p>
            </div>





            <div className='w-[80%]'>
        <form className="space-y-6">
           <h1>Edit Your Profile</h1>
           <div className='flex gap-[50px]'>
            <div className='w-full'>
            <p className='mb-[8px]'>First Name</p>
            <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            />
            </div>
            <div className='w-full'>
            <p className='mb-[8px]'>Last Name</p>
            <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            />
              </div>
           </div>
         
           <div className='flex gap-[50px]'>
            <div className='w-full'>
            <p className='mb-[8px]'>Email</p>
            <input
            type="email"
            placeholder="user@example.com"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            />
            </div>
            <div className='w-full'>
            <p className='mb-[8px]'>Address</p>
            <input
            type="text"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            />
              </div>
           </div>
     
           <div className='space-y-[8px]'>
            <h1>Password Changes</h1>
            <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            />
            <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            />
            <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            />
           </div>
           <div className='flex gap-[16px] justify-end'> 
            <button className='font-semibold'>Cancle</button>
            <button
            type="submit"
            className="bg-[#DB4444]  text-white px-8 py-3 rounded hover:bg-red-600 transition">
            Save Changes
            </button>
           </div>
         
     </form>
            </div>
        </div>
        </Container>
    </section>
  )
}

export default Account