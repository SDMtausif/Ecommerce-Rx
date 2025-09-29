import React from 'react';
import { Link, useLocation } from 'react-router';
import Container from '../container/Container';

const NotFound = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const Error404 = [
    { name: 'Home /', path: '/' },
    { name: 'Error', path: '/*' },
  ];

  return (
    <Container>
      <div className="flex flex-col text-black">
        <div className="flex gap-2 pt-[140px] font-Poppins text-[14px]"> {/* Same concept=> Active design from Navbar */}
          {Error404.map((e) => (
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

        <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-200px)]">
          <h1 className="text-[110px] leading-[115px] font-Inter font-medium mb-[40px]">
            404 Not Found
          </h1>
          <p className="text-base leading-6 font-Poppins font-normal mb-[80px] max-w-[500px]">
            Your visited page not found. You may go home page.
          </p>
          <Link
            to="/"
            className="bg-[#DB4444] text-white px-[48px] py-4 rounded hover:bg-red-600 transition"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
