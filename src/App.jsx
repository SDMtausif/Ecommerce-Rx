import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './component/Layout';
import Home from './pages/Home';
import ProductData from './pages/ProductData';
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Login from './component/Login';
import ProductDetails from './pages/ProductDetails';
import Account from './pages/Account';
import BillingDetails from './pages/BillingDetails';
import Cart from './pages/Cart';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='ProductData' element={<ProductData/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path='Login' element={<Login/>}/>
          <Route path='element/:id' element={<ProductDetails/>}/>
          <Route path='Account' element={<Account />}/>
          <Route path='BillingDetails' element={<BillingDetails />} />
          <Route path='Cart' element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
