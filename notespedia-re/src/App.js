import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home/HomePage';
import ContactUs from './pages/ContactUs';
import PagenotFound from './pages/PagenotFound';
import Notes from './pages/Notes';
import Product from './pages/Home/product/Product';
import Cart from '../src/pages/Card/Cart.js'
import Login from './Auth/Login.js';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='/*' element={<PagenotFound/>}/>
      <Route path='/notes' element={<Notes/>}/>
      <Route path = '/productdetails' element={<Product/>}/>
      <Route path = '/cart' element={<Cart/>}/>
      <Route path = '/login' element={<Login/>}/>
    </Routes>
  
    </>
  );
}

export default App;
