import React from 'react';
import Container from '../container/Container';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeFromCart } from '../slice/cartSlice';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
const Cart = () => {
  const cartItems = useSelector(state => state.cartDetails.cartItems);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="px-4 py-[80px]">
      <Container>
        <div className="space-y-[24px]">
 
          <div className="flex font-Poppins font-medium text-[16px] px-[40px] py-[16px] border-b">
            <div className="w-[25%]">Product</div>
            <div className="w-[25%]">Price</div>
            <div className="w-[25%]">Quantity</div>
            <div className="w-[25%]">Subtotal</div>
          </div>

       
          {cartItems.length === 0 && (
            <p className="text-center py-10 text-gray-500">Your cart is empty</p>
          )}

          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center text-[16px] font-Poppins px-[40px] py-[16px] border-b"
            >
         
              <div className="flex items-center w-[25%] gap-[16px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[54px] h-[54px] object-contain"
                />
                <p className="line-clamp-1">{item.title}</p>
              </div>

    
              <p className="w-[25%]">${item.price.toFixed(2)}</p>

    
              <div className="w-[25%] flex flex-col items-center gap-2">                
               <div className='inline-block'>
                  <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-2 py-1 border rounded"
                >
               <FaChevronUp />
                </button>
               </div>
                <span>{item.quantity}</span>
                <div className='inline-block'>
                  <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-2 py-1 border rounded"
                >
                  <FaChevronDown />
                </button>
              </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-4 text-red-500 text-sm">
                  Remove
                </button>
              </div>

              <p className="w-[25%]">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

  
        <div className="flex justify-end mt-10">
          <div className="border p-6 rounded w-[300px] space-y-4">
            <h2 className="font-semibold text-lg">Cart Total</h2>
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="bg-[#DB4444] text-white px-6 py-3 rounded w-full hover:bg-red-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
