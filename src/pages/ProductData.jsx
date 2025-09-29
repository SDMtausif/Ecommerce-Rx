import React, { useEffect, useState } from 'react';
import Container from '../container/Container';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router'; 

const ProductData = () => {
  const [items, setItems] = useState([]);
  const [itemErr, setItemErr] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => setItems(data))
      .catch(err => setItemErr(err.message));
  }, []);


  const totalProducts = items.length;
  const totalPage = Math.max(1, Math.ceil(totalProducts / productPerPage));


  useEffect(() => {
    if (currentPage > totalPage) setCurrentPage(totalPage);
  }, [totalPage, currentPage]);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = items.slice(indexOfFirstProduct, indexOfLastProduct);
  const pageNumbers = [...Array(totalPage).keys()].map(i => i + 1);

  return (
    <Container>
      <div className="py-10">
        {itemErr && (
          <p className="text-center text-5xl text-red-500 font-Poppins font-medium py-20">
            FAILED TO FETCH API ⅐
          </p>
        )}

        <div className="grid grid-cols-4 gap-6">
          {currentProduct.map(element => (
            <Link
              to={`/element/${element.id}`}
              key={element.id}
              className="bg-white rounded-[4px] shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-[250px] rounded-[4px] flex items-center justify-center bg-gray-100">
                <img
                  src={element.image}
                  alt={element.title}
                  className="max-h-[180px] w-full object-contain"
                />
              </div>

              <div className="h-[150px] px-4 py-3">
                <p className="text-[16px] font-medium text-gray-800 line-clamp-2">
                  {element.title}
                </p>
                <div className="flex gap-3 mt-2 items-center justify-between">
                  <span className="text-orange-500 font-light text-[16px]">${element.price}</span>
                  <div className="flex items-center">
                    {[...Array(Math.round(element.rating.rate || 0))].map((_, i) => (
                      <FaStar key={i} className="text-[#FFAD33]" />
                    ))}
                    <span className="text-[#7D8184] text-[14px] font-semibold pl-2">
                      ({element.rating?.count ?? 0})
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex mt-10 gap-3">
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-3 py-1 cursor-pointer ${currentPage === number ? 'bg-black text-white' : ''}`}
              aria-current={currentPage === number ? 'page' : undefined}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductData;
