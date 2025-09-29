import React from 'react';
import CallLogo from '../assets/CallLogo.png'
import MessageLogo from '../assets/MessageLogo.png'
import Container from '../container/Container';

const Contact = () => {
  return (
    <Container>
      <div className="pt-[80px] pb-[144px] grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Section */}
      <div className="space-y-12 font-Poppins text-black text-[14px] leading-[21px]">
        <div>
          <div className='flex items-center gap-4 pb-6 text-4 font-6 font-medium'><img src={CallLogo}  alt="../assets/CallLogo.png" className='w-[40px] h-[40px]' /><p>Call To Us</p></div>
          <p className="pb-4">We are available 24/7, 7 days a week.</p>
          <p className="pb-4">Phone: +8801611112222</p>
        </div>
        <hr className='max-w-[270px]' />
        <div>
          <div className='flex items-center gap-4 pb-6 text-4 font-6 font-medium'><img src={MessageLogo}  alt="../assets/MessageLogo.png" className='w-[40px] h-[40px]' /><p>Write To US</p></div>
          <p className="pb-4">Fill out our form and we will contact you within 24 hours.</p>
          <p className="pb-4">Emails: customer@exclusive.com</p>
          <p className="pb-4">Emails: support@exclusive.com</p>
        </div>
      </div>

      {/* Right Section */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name *"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone *"
            className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
        ></textarea>
        <button
          type="submit"
          className="bg-[#DB4444] ml-[395.06px] text-white px-8 py-3 rounded hover:bg-red-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
    </Container>
  );
};

export default Contact;
