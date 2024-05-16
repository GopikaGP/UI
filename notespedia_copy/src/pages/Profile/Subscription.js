import React from 'react';
import "../../styles/profile.css";

const Subscription = () => {
  return (
    <>
   
    <div className="card w-100 mb-3 mt-4 p-5 card_profile">
        <div className="card-body">
          <h4 className="card-title pb-4">Subscription</h4>
           <div className='card-text card_custom_subscription'>
           Instant access to ebooks, audiobooks, articles, podcasts, sheet music,
            and documents — all in one simple digital subscription.
           </div>
           <button className="btn mt-4 w-100 sub_btn" type="button">Start your Free trial</button>
        </div>
      </div>
    </>
  )
}

export default Subscription