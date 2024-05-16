import React from "react";
import "../product/Product.css";
import StarRating from '../../StarRating.js';

const Detail = () => {

  const Details = [
    {
      image: "/Images/newbook3.png",
      title: "Ikigai : Japanese Art of staying Young..While growing Old",
      content:
        "What is Ikigai? Ikigai is the art of living life in a way that a person is always inspired to remain focused on their goal. The meaning of Ikigai is to make your life meaningful. The people who use the principles....more",
      price: "₹480.00",
      price2: "₹750.00",
    },
  ];
  return (
    <div>
      <div className="card-details mb-3">
        {Details.map((a) => (
          <div className="row-details">
            <div className="col-md-4-details">
              <div className="detail_img">
                <img src={a.image} className="img-fluid-details" alt="..." />
              </div>
            </div>
            <div className="col-md-8-details">
              <div className="card-body-details">
                <div className="cardTitle">
                  <h5 className="card-title">{a.title}</h5>
                </div>
                <div className="d-flex-circle">
                  <div className="circle"></div>
                  <p>Keira Miki</p>
                </div>
                <div class="hstack gap-3">
                  <div  className="d-flex flex-column">
                    <p className="d-flex flex-row">4.2<StarRating/></p>
                    <p>Reviwes</p>
                   </div>
                  <div class="vr"></div>
                  <div  className="d-flex flex-column">
                 <p >33</p>
                 <p>Chapters</p>
                    </div>
                  <div class="vr"></div>
                  <div className="d-flex flex-column">
                    <p>186</p>
                    <p>Pages</p>
                  </div>
                </div>
                
                <p className="card-text-detail">{a.content}</p>
                <p className="card-text">
                   <div className="d-flex flex-row gap-4">
                    <h5>{a.price}</h5>
                    <p className="fw-lighter price-line">{a.price2}</p>
                   </div>
                </p>
                <p className="card-text">
                   <div className="d-flex flex-row gap-4">
                    <button className="button-add">Buy Now</button>
                    <button className="button-cart">Add to Cart</button>
                   </div>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default Detail;
