import React from 'react';
import '../styles/Home/staring.css'

const StarRating = () => {
  return (
    <div  className="star-rating">
        {[...Array(1)].map((star) => {        
        return (         
          <span className="Star">&#9733;</span>
        );
      })}
    </div>
  )
}

export default StarRating;