import React from "react";
import Layout from "../../components/Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import NewArives from "./NewArives";
import Recently from "./Recently";

import MainFilter from "./filter/MainFilter";
import Topsellers from "./Topsellers";
import BulkOrders from "./BulkOrders";
import QuestionPaper from "./QuestionPaper";
import ImageBank from "./ImageBank";
import Shop from "./shop/Shop";
import Banner from './Banner/Banner'

const HomePage = () => {
  return (
    <Layout>
      <Shop/>
      <div className="home_main pt-5">
      <Container className="bg-color: #EAF4F1;
">
          <div className="row">
          {/* <div className="col-md-3"><MainFilter/></div> */}
          {/* <div className="col-md-9"> */}
          <NewArives/>
          <Recently/>
          <Topsellers/>
          <BulkOrders/>
          <QuestionPaper/>
          <ImageBank/>
         
          
          {/* </div> */}
          </div>
       
       
     
        </Container>
        </div>
        </Layout>  
       
  );
};

export default HomePage;
