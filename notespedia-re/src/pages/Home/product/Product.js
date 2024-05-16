import React from 'react';
import '../product/Product.css'
import Detail from './Detail';
import { Container } from 'react-bootstrap';
import Tab from '../product/Tab/Tab'
import ReadMore from './Slider/Readmore';
import Topseller from './Slider/Topseller';
import Layout from '../../../components/Layout/Layout';



const Product = () => {
  return (
    <>
    <Layout>
    <div className='product_main'>
        <Container>
       <Detail/>
       <Tab/>
       <ReadMore/>
       <Topseller/>
       <Topseller/>
       <Topseller/>
    
       </Container>
     
    </div>
    </Layout>+
    </>
  )
}

export default Product