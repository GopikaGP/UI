import React from 'react'
import { Container } from 'react-bootstrap';
import '../shop/shop.css';

const Shop = () => {
    const shopDetails = [{
         
      "id":1,
      "image1": "/Images/NewBook1.png",
      "image2":"/Images/newBook2.png",
      "image3":"/Images/newbook3.png",
      "title": "Ikigai : Japanese Art of staying Young.. While grow...",
      "description":"Get new edition for half the price."
      
    }]
  return (
    <Container >
       <div className='card-shop '>
       
            {shopDetails.map((shop)=>(
                 
              <div className='row-shop '>
               
                <div className='col-md-3-shop '>
                   <div className='d-flex flex-column pt-5'>
                    <h4 className='p-2'>{shop.title}</h4>
                    <p className='p-2'>{shop.description}</p>
                    <button type="button" className="btn btn-success" style={{"width":"203px" ,"height":"60px"}}>Shop</button>
                   </div>
                </div>
                <div className='col-md-9-shop'>
                    <div className='d-flex-shop'>
                        <div className='down_p'>
                        <div className='box-imgs'>
                        <img className='img1' src ={shop.image1} alt={shop.description}/>
                        </div>
                        </div>
                        
                        <div className='box-imgs2'>
                        <img className='img1' src ={shop.image2} alt={shop.description}/>
                        </div>
                        <div className='down_p'>
                        <div className='box-imgs'>
                        <img className='img1' src ={shop.image3} alt={shop.description}/>
                        </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            
            ))}
           
        
        </div> 
    </Container>
  )
}

export default Shop