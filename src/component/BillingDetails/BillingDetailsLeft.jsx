import React from 'react'
import { Link, useLocation } from 'react-router';

const BillingDetailsLeft = () => {
    const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const BillingDetails = [
    { name: 'My Account /', path: '/Account' },
    { name: 'Product /', path: '/ProductData' },
    { name: 'CheckOut', path: '/BillingDetails' },
  ];
  return (
   <section className=''>
             <div className="flex gap-2 pb-[80px] font-Poppins text-[14px]"> {/* Same concept=> Active design from Navbar */}
                {BillingDetails.map((e) => (
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
      <div className='space-y-[32px]'>
          <h1 className='font-Inter font-medium text-[36px] tracking-[4%] text-black' >Billing Details</h1>
       <div>
        <p className='font-Poppins font-normal text-[16px] leading-[24px] text-black'>First Name</p>
        <input type="text"
        className='w-full border-gray-700 border-[1px] rounded outline-0 text-black font-Poppins font-normal text-[16px] leading-[24px] px-1.5 py-1 '/>
       </div>
       <div>
        <p className='font-Poppins font-normal text-[16px] leading-[24px] text-black'>Company Name</p>
        <input type="text"
        className='w-full border-gray-700 border-[1px] rounded outline-0 text-black font-Poppins font-normal text-[16px] leading-[24px] px-1.5 py-1 '/>
       </div>
       <div>
        <p className='font-Poppins font-normal text-[16px] leading-[24px] text-black'>Street Address*</p>
        <input type="text"
        className='w-full border-gray-700 border-[1px] rounded outline-0 text-black font-Poppins font-normal text-[16px] leading-[24px] px-1.5 py-1 '/>
       </div>
       <div>
        <p className='font-Poppins font-normal text-[16px] leading-[24px] text-black'>Apartment, floor, etc. (optional)</p>
        <input type="text"
        className='w-full border-gray-700 border-[1px] rounded outline-0 text-black font-Poppins font-normal text-[16px] leading-[24px] px-1.5 py-1 '/>
       </div>
       <div>
        <p className='font-Poppins font-normal text-[16px] leading-[24px] text-black'>Town/City*</p>
        <input type="text"
        className='w-full border-gray-700 border-[1px] rounded outline-0 text-black font-Poppins font-normal text-[16px] leading-[24px] px-1.5 py-1 '/>
       </div>
       <div>
        <p className='font-Poppins font-normal text-[16px] leading-[24px] text-black'>Phone Number*</p>
        <input type="text"
        className='w-full border-gray-700 border-[1px] rounded outline-0 text-black font-Poppins font-normal text-[16px] leading-[24px] px-1.5 py-1 '/>
       </div>
       <div>
        <p className='font-Poppins font-normal text-[16px] leading-[24px] text-black'>Email Address*</p>
        <input type="text"
        className='w-full border-gray-700 border-[1px] rounded outline-0 text-black font-Poppins font-normal text-[16px] leading-[24px] px-1.5 py-1 '/>
       </div>
      </div>
   </section>
  )
}

export default BillingDetailsLeft