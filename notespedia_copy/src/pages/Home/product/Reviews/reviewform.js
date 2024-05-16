import React from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ReviewForm =()=>{

    const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
    return(
        <div >
        {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <form>
                  <h3>Ikigai : Japanese Art of staying Young..While growing Old</h3>
                  <p className='modal-text'>Rate this book</p>
                  <p className='modal-text'>Reviews are public and include your account and device info</p>
                  <p className='modal-text'>Everyone can see your Google Account name and photo associated with your review.
                    Past edits are visible to users unless you delete your review.</p>
                  <button className='modal-learn'>Learn more</button>
                  <div className='modal-star'>
                  <span class='modal-rating' >
                  <i><AiFillStar /></i>
                  <i><AiFillStar /></i>
                  <i><AiFillStar /></i>
                  <i><AiFillStar /></i>
                  <i><AiFillStar /></i> 
                  </span>
                  </div>
                  <div className="modal-input">

                    <input type="text" className='modal-exp' placeholder='Describe your experience (optional)' />
                  </div>
                  <div className='modal-btn'>
                  <input  className="modal-submit"type="submit" value="Submit" />

                  </div>
                </form>
              </div></div>
          )}
</div>
    )
}
export default ReviewForm;