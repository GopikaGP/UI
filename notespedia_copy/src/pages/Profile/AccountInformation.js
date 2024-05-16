import React from "react";
import { BiMessageSquareError } from "react-icons/bi";
import "../../styles/profile.css";

const AccountInformation = () => {
  return (
    <>
      <div className="card w-100 mb-3 mt-5 p-5 card_profile">
        <div className="card-body">
          <h4 className="card=title">Account Information</h4>
          <div
            class="alert alert-warning d-flex align-items-center"
            role="alert"
          >
            <BiMessageSquareError />
            <div>
              To secure your account, please <a className="link_modify_user"  href="">verify your email</a>
            </div>
          </div>
          <div className="d-flex flex-column content_userprofile">
            <div className="name_section_flex">
              <div>
                <span className="dh_up">Full Name</span>
                <br />
                <div>David</div>
              </div>
              <div>
                <a className="link_modify_user" href="/edit-profile">edit</a>
              </div>
            </div>
            <div>
              <span className="dh_up">Email</span>
              <div>daviddeo@123.com</div>
            </div>
            <div>
              <span className="dh_up">User name</span>
              <div>DavidDeo</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInformation;
