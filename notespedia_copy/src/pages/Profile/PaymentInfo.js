import React from 'react'

const PaymentInfo = () => {
  return (
    <>
     <div className="card w-100 mb-3 mt-5 p-5 card_profile">
        <div className="card-body">
          <h4 className="card-title pb-4">Payment Information</h4>
          <div className="d-flex flex-column content_userprofile">
            <div className="name_section_flex">
              <div>
                <span className="dh_up">Upcoming payment</span>
                <br />
                <div>No upcoming payment</div>
              </div>
              <div>
                <a  className="link_modify_user" href="">View history</a>
              </div>
            </div>
          {/* section 2 */}
          <div className="name_section_flex">
              <div>
                <span className="dh_up">Payment method</span>
                <br />
                <div>No card on file</div>
              </div>
              <div>
                <a  className="link_modify_user" href="">update</a>
              </div>
            </div>
            {/*  */}
            </div>
        </div>
      </div>
    </>
  )
}

export default PaymentInfo