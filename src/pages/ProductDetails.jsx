import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Container from '../container/Container';
import { FaStar } from 'react-icons/fa';
import DemoImg from '../assets/DemoImg.png';
import DemoImg2 from '../assets/DemoImg2.png';
import { CiDeliveryTruck } from 'react-icons/ci';
import { GiReturnArrow } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [randomFour, setRandomFour] = useState([]);
  const [itemErr, setItemErr] = useState('');
  const [selectedImg, setSelectedImg] = useState(DemoImg);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setItems(data);
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setRandomFour(shuffled.slice(0, 4));
      })
      .catch(err => setItemErr(err.message));
  }, []);

  const singleProduct = items.find(product => String(product.id) === String(id));

  useEffect(() => {
    if (singleProduct?.image) setSelectedImg(singleProduct.image);
  }, [singleProduct]);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <section className="pt-[180px] pb-[140px]">
        <Container>
          <div className="w-full flex gap-6">
         
            <div className="w-[20%] flex flex-col gap-[20px]">
              {[singleProduct?.image || DemoImg2, DemoImg2].map((img, i) => (
                <div key={i} className="w-[170px] h-[138px] overflow-hidden rounded bg-[#F5F5F5] p-[8px]">
                  <img
                    onClick={() => setSelectedImg(img)}
                    src={img}
                    className="w-full h-full object-contain cursor-pointer"
                  />
                </div>
              ))}
            </div>

      
            <div className="w-[40%]">
              <div className="w-full bg-[#F5F5F5] rounded p-[12px]">
                <img
                  className="h-[567px] w-full object-contain block"
                  src={selectedImg}
                  alt={singleProduct?.title ?? 'selected'}
                />
              </div>
            </div>

            <div className="w-[40%]">
              <div className="ml-[70px]">
                <h1 className="font-Inter font-semibold text-[24px] pb-[16px]">
                  {singleProduct?.title ?? 'Product Title'}
                </h1>
                <span className="font-Inter text-[24px]">${singleProduct?.price ?? '—'}</span>
                <p className="font-Poppins text-[14px] py-[24px] max-w-[374px]">
                  {singleProduct?.description ?? 'Product description placeholder.'}
                </p>

                <div className="w-full h-[1px] bg-black my-6" />

                <div className="border-[1px] border-black rounded">
                  <div className="border-b-[1px] flex items-center gap-[16px] py-[16px] px-[16px]">
                    <CiDeliveryTruck size={40} />
                    <div>
                      <p className="text-[16px] font-Poppins font-medium">Free Delivery</p>
                      <span className="text-[12px] font-Poppins">Enter your postal code</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[16px] py-[16px] px-[16px]">
                    <GiReturnArrow size={40} />
                    <div>
                      <p className="text-[16px] font-Poppins font-medium">Return Delivery</p>
                      <span className="text-[12px] font-Poppins">Free 30 Days Returns</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(singleProduct)}
                  className="bg-[#DB4444] text-white px-6 py-3 rounded mt-6 hover:bg-red-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

    
      <section>
        <Container>
          <div className="py-10">
            {itemErr && (
              <p className="text-center text-5xl text-red-500 font-Poppins font-medium py-20">
                FAILED TO FETCH API
              </p>
            )}
            <div className="grid grid-cols-4 gap-6">
              {randomFour.map(element => (
                <Link
                  to={`/element/${element.id}`}
                  key={element.id}
                  className="bg-white rounded-[4px] shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-[250px] flex items-center justify-center bg-gray-100">
                    <img src={element.image} alt={element.title} className="max-h-[180px] object-contain" />
                  </div>
                  <div className="h-[150px] px-4 py-3">
                    <p className="text-[16px] font-medium text-gray-800 line-clamp-2">{element.title}</p>
                    <div className="flex gap-3 mt-2 items-center justify-between">
                      <span className="text-orange-500">${element.price}</span>
                      <div className="flex items-center">
                        {[...Array(Math.round(element.rating?.rate || 0))].map((_, i) => (
                          <FaStar key={i} className="text-[#FFAD33]" />
                        ))}
                        <span className="text-[#7D8184] text-[14px] pl-2">({element.rating?.count ?? 0})</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
