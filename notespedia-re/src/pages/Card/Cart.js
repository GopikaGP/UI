import React from 'react';
import Layout  from '../../../src/components/Layout/Layout.js';
import { Container } from 'react-bootstrap';
import ShoppingCart from './ShoppingCart.js';

const Card = () => {
  return (
    <div>
    <Layout>
      <div className='cart_main'>
      <Container  ClassName="bg-color: #EAF4F1">
        
          <ShoppingCart/>
           
      </Container>
      
      
      </div>
    </Layout> 
    </div>
  )
}

export default Card