import React from "react";
import { PiPenNibThin } from "react-icons/pi";
import "../Card/cart.css";

const Coupons = () => {
  return (
    <div>
      <div style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
        <div>
          <div className="fw-bold text-muted mt-3 mb-3">Coupons</div>
          <div className="d-flex flex-row justify-content-between">
            <div>
              {" "}
              <PiPenNibThin /> Apply Coupons
            </div>

            <button
              type="button"
              className="add_add_btn_apply"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              APPLY
            </button>
          </div>
        </div>
      </div>

    {/*  */}
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">APPLY COUPON</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
       <div className="d-flex flex-row box_coupen_inp"><input type="text" placeholder="Enter coupon Code"/></div>
       <div>
       
        <>
        <div className="doted_box mb-2">MFGJY6</div>
        <div className="fw-bold mb-2">Save $20</div>
        <div className=" fw-small text-muted">RS.200 off on minimum purchase of rs 999</div>
        <div className="fw-smaller text-muted">Expires on: 31st December 2023 | 5:30 pm</div>
        </>
      </div>
      </div>
     
      <div className="modal-footer">
      <div>Total : 200</div>
        <button type="button" className="btn apply_m_c">APPLY</button>
      </div>
    </div>
  </div>
</div>


    {/*  */}

    </div>
  );
};

export default Coupons;
