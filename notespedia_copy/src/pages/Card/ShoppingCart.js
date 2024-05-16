import React from 'react';
import '../Card/cart.css';
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import ChangeAddress from './ChangeAddress';
import Coupons from './Coupons';

const ShoppingCart = () => {
  const navigate = useNavigate();
  return (
    <div>
      
      <div className="card card_add_c">
  <div className="row">
    <div className="col-md-8 cart">
      <ChangeAddress/>
      <div className="title">
        <div className="row">
          <div className="col  fw-bolder"><h4><b>Shopping Cart</b></h4></div>
          {/* <div className="col align-self-center text-right text-muted">3 items</div> */}
        </div>
      </div>    
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2"><img className="img-fluid" src="Images/NewBook1.png" /></div>
          <div className="col">
          <div className="row fw-medium">Ikigai : Japanese Art of staying Young.. While grow</div>
            <div className="row">Keira Miki</div>
          </div>
          <div className="col">
            <a className='text-decoration-none' href="#">-</a><a  href="#" className="border text-decoration-none">1</a><a  className='text-decoration-none' href="#">+</a>
          </div>
          <div className="col">€ 44.00  <span className="close">✕</span></div>
        </div>
      </div>
      <div className="row">
        <div className="row main align-items-center">
          <div className="col-2"><img className="img-fluid" src="Images/newBook3.png" /></div>
          <div className="col">
          
              <div className="row fw-medium">Ikigai : Japanese Art of staying Young.. While grow</div>
            <div className="row">Keira Miki</div>
          </div>
          <div className="col">
            <a className='text-decoration-none' href="#">-</a><a href="#" className="border text-decoration-none">1</a><a  className='text-decoration-none' href="#">+</a>
          </div>
          <div className="col">€ 44.00 <span className="close">✕</span></div>
        </div>
      </div>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2"><img className="img-fluid" src="Images/newBook2.png" /></div>
          <div className="col">
            <div className="row fw-medium">Ikigai : Japanese Art of staying Young.. While grow</div>
            <div className="row">Keira Miki</div>
          </div>
          <div className="col">
            <a className='text-decoration-none' href="#">-</a><a href="#" className="border text-decoration-none">1</a><a  className='text-decoration-none' href="#">+</a>
          </div>
          <div className="col">€ 44.00 <span className="close">✕</span></div>
        </div>
      </div> <div className="back-to-shop "><a className='text-decoration-none' href="/">←</a><span className="text-muted">Back to shop</span></div>
    </div>
     
    <div className="col-md-4 summary">
      <Coupons/>
      <div><h5><b>Summary</b></h5></div>
      <hr />
      <div >
        <div className='fw-bolder '  style={{paddingLeft: 0}}>Do you have a Promo Code?<HiQuestionMarkCircle /></div>
        <div></div>
      </div>
      <div className="row">
        <div className="col fw-medium pt-3" style={{paddingLeft: 0}}>Subtotal <HiQuestionMarkCircle /> </div>
        <div className="col text-right cart_p_r fw-semibold">$90.00</div>
      </div>
      <div className="shipping_flex">
        <div className='fw-medium pt-3'  style={{paddingLeft: 0}}>Estimated Shipping and Handling  </div>
        <div className="text-right cart_p_r fw-semibold">$90.00</div>
      </div>
      <div className="row">
        <div className="col fw-medium pt-3 pb-3" style={{paddingLeft: 0}}>Estimated Tax <HiQuestionMarkCircle /> </div>
        <div className="col text-right cart_p_r">-</div>
      </div>

      
      <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
        <div className="col fw-semibold">TOTAL PRICE</div>
        <div className="col text-right cart_p_r fw-semibold">€ 137.00</div>
      </div>
      <div style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}></div>
      <button className="btn btn-chechkout">CHECKOUT</button>
      <button className='btn btn_payment' onClick={navigate('/payment')}>PayPal</button>
    </div>
  </div>
</div>

</div>


   
  )
}

export default ShoppingCart