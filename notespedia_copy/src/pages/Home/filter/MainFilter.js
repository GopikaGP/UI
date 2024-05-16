import React from 'react';
import Category from './Category.js'
import Publisher from './Publisher.js';
import Book from './BookFormater.js';

const MainFilter = () => {
  return (
    <>
    <div className='box-line'>
   
        <h3>Filter</h3>
        <Category/>
        <Book/>
        <Publisher/>
       
      
        </div>
       
        </>
  )
}

export default MainFilter