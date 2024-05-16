import React from 'react';
import Layout  from '../../../src/components/Layout/Layout.js';
import { Container } from 'react-bootstrap';
import ShoppingCart from '../Card/ShoppingCart.js';
import PriceSection from '../Card/PriceSection.js'


const Card = () => {
  return (
    <div>
    <Layout>
      <div className='cart_main'>
      <Container>
       
      
          <ShoppingCart/>
         
        
      </Container>
      
      
      </div>
    </Layout> 
    </div>
  )
}

export default Card