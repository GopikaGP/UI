import React, { useState } from 'react';
import '../Card/cart.css';

const ShoppingCart = () => {
  // Assuming you have some state for cart items and total
  const [cartItems, setCartItems] = useState([
    // Your cart items can be stored as an array of objects
    // Example:
    {
      id: 1,
      name: 'Ikigai : Japanese Art of staying Young..While growing Old',
      image: "/Images/newBook2.png",
      quantity: 1,
      price: "$26.00",
      price2:"$46.00"
    },
    {
        id: 1,
        name: 'Ikigai : Japanese Art of staying Young..While growing Old',
        image: "/Images/newBook5.png",
        
        quantity: 1,
        price: "$26.00",
        price2:"$46.00"
      },
    
  ]);

  // Calculate the total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="page">
      <section className="shopping-cart dark">
        <div className="container">
          
          <div className="content">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  {cartItems.map((item) => (
                    <div className="product" key={item.id}>
                      <div className="row">
                        <div className="col-md-3">
                          <img className="img-fluid mx-auto d-block image" src={item.image} alt={item.name} />
                        </div>
                        <div className="col-md-8">
                          <div className="info">
                            <div className="row">
                              <div className="col-md-5 product-name">
                                <div className="product-name">
                                  <a href="#">{item.name}</a>
                                  <div className="product-info">
                                    <div className='peiceSEction'>
                                    <span className="valuePrice">{item.price}</span>
                                    <span className="priceValue">{item.price2}</span>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 quantity">
                                <label htmlFor="quantity">Quantity:</label>
                                <input
                                  id={`quantity_${item.id}`}
                                  type="number"
                                  value={item.quantity}
                                  className="form-control quantity-input"
                                  onChange={(e) => {
                                    const newQuantity = parseInt(e.target.value);
                                    setCartItems((prevItems) =>
                                      prevItems.map((cartItem) =>
                                        cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
                                      )
                                    );
                                  }}
                                />
                              </div>
                              <div className="col-md-3 price">
                                <span>${item.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
              <div class="summary">
        <div class="receipt">
          <h2 class="receipt-heading">Receipt Summary</h2>
          <div>
            <table class="table">
              <tr>
                <td>249.50 x 2 nights</td>
                <td class="price">499.00 USD</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td class="price">0.00 USD</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td class="price">499.00 USD</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td class="price">47.41 USD</td>
              </tr>
              <tr class="total">
                <td>Total</td>
                <td class="price">546.41 USD</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="payment-info">
          <h3 class="payment-heading">Payment Information</h3>
          <form
            class="form-box"
            enctype="text/plain"
            method="get"
            target="_blank"
          >
            <div>
              <label for="full-name">Full Name</label>
              <input
                id="full-name"
                name="full-name"
                placeholder="Satoshi Nakamoto"
                required
                type="text"
              />
            </div>

            <div>
              <label for="credit-card-num"
                >Card Number
                <span class="card-logos">
                  <i class="card-logo fa-brands fa-cc-visa"></i>
                  <i class="card-logo fa-brands fa-cc-amex"></i>
                  <i class="card-logo fa-brands fa-cc-mastercard"></i>
                  <i class="card-logo fa-brands fa-cc-discover"></i> </span
              ></label>
              <input
                id="credit-card-num"
                name="credit-card-num"
                placeholder="1111-2222-3333-4444"
                required
                type="text"
              />
            </div>

            <div>
              <p class="expires">Expires on:</p>
              <div class="card-experation">
                <label for="expiration-month">Month</label>
                <select id="expiration-month" name="expiration-month" required>
                  <option value="">Month:</option>
                  <option value="">January</option>
                  <option value="">February</option>
                  <option value="">March</option>
                  <option value="">April</option>
                  <option value="">May</option>
                  <option value="">June</option>
                  <option value="">July</option>
                  <option value="">August</option>
                  <option value="">September</option>
                  <option value="">October</option>
                  <option value="">November</option>
                  <option value="">Decemeber</option>
                </select>

                <label class="expiration-year">Year</label>
                <select id="experation-year" name="experation-year" required>
                  <option value="">Year</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                  <option value="">2026</option>
                </select>
              </div>
            </div>

            <div>
              <label for="cvv">CVV</label>
              <input
                id="cvv"
                name="cvv"
                placeholder="415"
                type="text"
                required
              />
              <a class="cvv-info" href="#">What is CVV?</a>
            </div>

            <button class="btn btn-success">
           Check Out
            </button>
          </form>

          <p class="footer-text">
           
            Your credit card infomration is encrypted
          </p>
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShoppingCart;
