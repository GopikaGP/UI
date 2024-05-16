import React, { useState } from "react";
import { productDetails } from "./ProductDetails";
import "../../styles/Home/newArrives.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "../StarRating.js";
import {useNavigate} from 'react-router-dom'

const NewArives = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState(productDetails);

  // Custom Next Arrow component
  const CustomNextArrow = (props) => (
    <div {...props} className="custom-arrow custom-next-arrow">
      <div className="arrow-right"></div>
    </div>
  );

  // Custom Previous Arrow component
  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-arrow custom-prev-arrow">
      <div className="arrow-left"></div>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const navigateToProductDetails = () => {
    navigate('/productdetails');
  };

  return (
    <>
      
       
        <div>
          <h3 className="Title_new">New Arrivals</h3>
          <div className="newArrives">
            <Slider {...settings}>
              {products.map((product) => (
                <div className="custom-card" key={product.id}>
                  {/* Your card component */}
                  <div onClick={navigateToProductDetails}>
                    <div className="card-home p-2">
                      <div className="card-img-1">
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.title}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-text" >{product.title}</h5>
                        <div className="price-section">
                          <span className="staring">
                            4.5
                            <StarRating />
                          </span>
                          <span className="price-line">{product.price1}</span>
                          <span className="price fw-bold">
                            {product.price2}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
       
   
    </>
  );
};

export default NewArives;
