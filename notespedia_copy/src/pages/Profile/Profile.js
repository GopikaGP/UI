import React from "react";
import AccountInformation from "./AccountInformation";
import Layout from "../../components/Layout/Layout";
import { Container } from "react-bootstrap";
import "../../styles/profile.css";
import Subscription from "./Subscription";
import PaymentInfo from "./PaymentInfo";
import MoreOption from "./MoreOption";
import OurProducts from "./OurProducts";

const Profile = () => {
  return (
    <Layout>
      <div className="profile_main">
        <Container className="bg-color: #EAF4F1">
          <div className="main_part_profile">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <AccountInformation />
                <Subscription />
              </div>
              <div className="col-md-5">
                <PaymentInfo />
                <MoreOption/>
                <OurProducts/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Profile;
