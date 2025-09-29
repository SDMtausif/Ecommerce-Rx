import React, { useState } from 'react'
import image200 from '../../assets/image200.png'
import BankLogo from '../../assets/BankLogo.png'
const BillingDetailsRight = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  return (
    <section className='pt-[100px]'>
      
          <div>
            <div className='space-y-[32px] mb-[32px]'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[24px]'>
                <div className='w-[54px] h-[54px]' ><img src={image200} alt="" /></div>
                <p className='font-Poppins font-normal text-[16px] leading-[24px] text-black'>LCD Monitor</p>
              </div>
               <span className='font-Poppins font-normal text-[16px] leading-[24px] text-black '>$__</span>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[24px]'>
                <div className='w-[54px] h-[54px]' ><img src={image200} alt="" /></div>
                <p className='font-Poppins font-normal text-[16px] leading-[24px] text-black'>LCD Monitor</p>
              </div>
                 <span className='font-Poppins font-normal text-[16px] leading-[24px] text-black '>$__</span>
            </div>
            </div>

            <div className='space-y-[16px]'>
             <div className='flex items-center justify-between font-Poppins font-normal text-[16px] leading-[24px] text-black border-gray-500 py-[16px] border-b-[1px]'>
              <p>Subtotal:</p>
               <span>$__</span>
             </div>

             <div className='flex items-center justify-between font-Poppins font-normal text-[16px] leading-[24px] text-black border-gray-500 py-[16px] border-b-[1px]'>
               <p>Shipping:</p>
               <span>Free</span>
             </div>

             <div className='flex items-center justify-between font-Poppins font-normal text-[16px] leading-[24px] text-black  py-[16px]'>
               <p>Total:</p>
               <span>$__</span>
             </div>
            </div>
             
             <div className='flex items-center justify-between mt-[32px]'>
               <div className='flex items-center gap-[16px]'>
               <div className='[24px] w-[24px] rounded-full border-[2px] border-black flex items-center justify-center'>
               <button className={`rounded-full   border-[2px] h-[20px] w-[20px]  border-white ${isActive ? 'bg-black ' : ' ' }` }
                  onClick={()=>setIsActive(!isActive)}>             
               </button>
               </div>
               <p className='font-Poppins font-normal text-[16px] leading-[24px]'>Bank</p>
               </div>
               <div className='w-[192px] h-[28px]'><img src={BankLogo} alt="" /></div>
             </div>

             <div className='flex items-center gap-[16px] mt-[32px]'>
               <div className='[24px] w-[24px] rounded-full border-[2px] border-black flex items-center justify-center'>
               <button className={`rounded-full   border-[2px] h-[20px] w-[20px]  border-white ${isActive2 ? 'bg-black ' : ' ' }` }
                  onClick={()=>setIsActive2(!isActive2)}>             
               </button>
               </div>
               <p className='font-Poppins font-normal text-[16px] leading-[24px]'>Cash on delivery</p>
             </div>
          </div>

          <div>
            <div className='py-[32px]'>
              <button  className="bg-[#DB4444] border-[1px] border-[#DB4444] mr-[16px]  text-white pr-[159px] pl-[24px] py-[16px] rounded hover:bg-white hover:border-[1px] hover:border-black hover:text-black transition">Coupon Code</button>
              <button  className="bg-[#DB4444] border-[1px] border-[#DB4444]  text-white px-[48px] py-[16px] rounded hover:bg-white hover:border-[1px] hover:border-black hover:text-black transition">Apply Coupon</button>
            </div>
            <button  className="bg-[#DB4444] border-[1px] border-[#DB4444]  text-white px-[48px] py-[16px] rounded hover:bg-white hover:border-[1px] hover:border-black hover:text-black transition">Place Order</button>
          </div>
    </section>
  )
}

export default BillingDetailsRight