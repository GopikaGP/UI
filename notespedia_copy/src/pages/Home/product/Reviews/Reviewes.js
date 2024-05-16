import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../Reviews/reviewes.css';

const Reviewes = () => {
  const [rate, setRate] = useState(0);
  return (
    <div>
      <h6>Ratings and reviews</h6>
      <div>
        <h3 className="rating">4.2</h3>
        <div className="r3011">3,011 reviews</div>
<div className="rev0-star">
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <label>
              <div className="star"
                type="radio"
                value={givenRating}
                onClick={() => {
                  setRate(givenRating);
                }}
              />
              <div className="rev-star">
                <FaStar
                  color={
                    givenRating < rate || givenRating === rate
                      ? "white"
                      : " #05CF64"
                  }
                />
              </div>
            </label>
          );
        })}{" "}
      </div></div>
      <div>
      <div className="r0">
      <button className="btn-r1">
      
        See all reviews </button> <span ><button className="btn-r2"> Write a review</button></span>
      </div></div>
      <div class="mid d-flex">
                    <div class="index">
                        <p class="text-muted">5</p>
                        <p class="text-muted">4</p>
                        <p class="text-muted">3</p>
                        <p class="text-muted">2</p>
                        <p class="text-muted">1</p>
                    </div>

                    <div class="card-content col-md-9 col-8">
                        <div class="mb-2">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar"
                                    style={{width: '75%', backgroundColor: '#05CF64' }} aria-valuenow="75" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="progress mb-2">
                            <div class="progress-bar" role="progressbar"
                                style={{width: '60%', backgroundColor: '#05CF64'}} 
                                aria-valuenow="16" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div class="progress mb-2">
                            <div class="progress-bar" role="progressbar" style={{width: '10%' ,backgroundColor: '#05CF64'}}
                                aria-valuenow="5" aria-valuemin="0" aria-valuemax=""></div>
                        </div>
                        <div class="progress mb-2">
                            <div class="progress-bar" role="progressbar" style={{width: '11%', backgroundColor: '#05CF64 '}}
                                aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress mb-2">
                            <div class="progress-bar" role="progressbar" style={{width: '3%', backgroundColor: '#05CF64'}}
                                aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    
    </div>
    
    </div>
    
  );
};
export default Reviewes;
