import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home/HomePage';
import ContactUs from './pages/ContactUs';
import PagenotFound from './pages/PagenotFound';
import Notes from './pages/Notes';
import Product from './pages/Home/product/Product';
import Cart from '../src/pages/Card/Cart.js'
import Login from './Auth/Login.js';
import EditProfile from '../src/pages/Profile/EditProfile.js'
import CreateProduct from './Admin/CreateProduct.js';

import CreateCategory from './Admin/CreateCategory.js';
import Registration from './Auth/Registration.js';
import AdminDashboard from './Admin/AdminDashboard.js';
import Profile from './pages/Profile/Profile.js';
import YourOrder from './pages/YourOrder/YourOrder.js';
import Payment from './pages/Payment/Payment.js';
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
      <Route path = '/user-profile' element={<Profile/>}/>
      <Route path='/YourOrder' element={<YourOrder/>}/>
      <Route path = '/register' element={<Registration/>}/>
      <Route path = '/admin-dashboard' element={<AdminDashboard/>}/>
      <Route path = '/create-product' element={<CreateProduct/>}/>
      <Route path = '/create-category' element={<CreateCategory/>}/>
      <Route path = '/edit-profile' element={<EditProfile/>}/>
      <Route path='/payment' element={<Payment/>}/>
    </Routes>
  
    </>
  );
}

export default App;
