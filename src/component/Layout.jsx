import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className="">
      
    <Header />
    <Navbar/>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;