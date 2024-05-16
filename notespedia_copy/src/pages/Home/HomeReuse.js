import React, { useState, useEffect } from "react";
import "../../styles/Home/newArrives.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "../StarRating.js";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import '../../components/LoadingPlaceholder/Skelton.css'
import  {useNavigate} from 'react-router-dom'

const Reuse = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  // api implementation
  const fetchData = async (page) => {
    try {
      const response = await axios.get(`http://139.59.38.234:80/api/Book/GetBooks?isfreshrelease=true&page=${page}&pageSize=10`);
      setProducts(response.data.data);
      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
  };

  useEffect(() => {
    setIsLoading(true); // Set loading to true when changing the page
    fetchData(currentPage);
  }, [currentPage]);

  // Custom Next Arrow component
  const CustomNextArrow = (props) => (
    <div {...props} className="custom-arrow custom-next-arrow">
      <div className="arrow_place_right">
        <div className="arrow-right"></div>
      </div>
    </div>
  );

  // Custom Previous Arrow component
  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-arrow custom-prev-arrow">
      <div className="arrow_place_left">
        <div className="arrow-left"></div>
      </div>
    </div>
  );

  const settings = {
    dots: false,
    infinite: 5,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const handleHoverChange = (hovered) => {
    setIsHovered(hovered);
  };

  return (
    <>
      <div>
        <div className="Title_new">{title}</div>
        <div
          className="newArrives"
          onMouseEnter={() => handleHoverChange(true)}
          onMouseLeave={() => handleHoverChange(false)}
        >
          <Slider {...settings}>
            {products.map((product) => (
              <div className="custom-card" key={product.bookId}>
                <div>
                  <div className="card-home p-2">
                    <div className="card-img-1">
                      {/* Use the Skeleton component for image placeholders */}
                      {isLoading ? (
                        <Skeleton height={150} width={100}   className="custom-skeleton"/>
                      ) : (
                        <img
                          src={product.bookcoverimage}
                          className="card-img-top"
                          alt={product.title}
                        />
                      )}
                    </div>
                    <div className="card-body">
                      <div className="card-text">{product.bookname}</div>
                      <div className="price-section">
                        <span className="staring_number">
                          4.5
                          <StarRating />
                        </span>
                        <span className="price-line">$45</span>
                        <span className="price fw-medium">&78</span>
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

export default Reuse;
