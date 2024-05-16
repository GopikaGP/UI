import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Container } from 'react-bootstrap'
import Paymentcart from './Paymentcart'

const Payment = () => {
  return (
   <Layout>
    <Container>

   <Paymentcart/>

    </Container>
   </Layout>
    
  )
}

export default Payment