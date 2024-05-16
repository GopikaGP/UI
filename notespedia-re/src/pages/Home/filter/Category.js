import React, { useState } from 'react';
import '../../../styles/Home/filter.css';
import Publisher from './Publisher';  
import { IoIosArrowDown } from 'react-icons/io'
import '../../../styles/Home/filter.css'; 
import BookFormater from './BookFormater';    
import Accordion from 'react-bootstrap/Accordion';


const Filter = () => {
 


  return (
    <>
     
       <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Category</Accordion.Header>
        <Accordion.Body>
        <div className="filter-menu p-3">
            <div className="checkbox_container round-checkbox">
              <input type="checkbox" className="checkbox" value="Coaster" id="PB1" />
              <label htmlFor="PB1" className="filter_list">
               All Genres
              </label>
            </div>
            <div className="checkbox_container round-checkbox">
              <input type="checkbox" className="checkbox" value="Fusion" id="PB2" />
              <label htmlFor="PB2" className="
              
              
              filter_list">
               All Genres
              </label>
            </div>
            <div className="checkbox_container round-checkbox">
              <input type="checkbox" className="checkbox" value="Unique" id="PB3" />
              <label htmlFor="PB3" className="filter_list">
               All Genres
              </label>
            </div>
            <div className="checkbox_container round-checkbox">
              <input type="checkbox" className="checkbox" value="Dream" id="PB4" />
              <label htmlFor="PB4" className="filter_list">
               All Genres
              </label>
            </div>
            <div className="checkbox_container round-checkbox">
              <input type="checkbox" className="checkbox" value="Young" id="PB5"/>
              <label htmlFor="PB5" className="filter_list">
               All Genres
              </label>
            </div>
            <div className="checkbox_container round-checkbox">
              <input type="checkbox" className="checkbox" value="Green" id="PB6" />
              <label htmlFor="PB6" className="filter_list">
               All Genres
              </label>
            </div>
          </div>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    
    </>
  );
};

export default Filter;
