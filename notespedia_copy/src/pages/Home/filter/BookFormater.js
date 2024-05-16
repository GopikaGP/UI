import React from 'react';
import '../../../styles/Home/filter.css';
import Accordion from 'react-bootstrap/Accordion';

const Book = () => {
  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Book Formatter</Accordion.Header>
          <Accordion.Body>
            <div className="filter-menu p-3">
              <div className="radio_container round-radio">
                <input type="radio" className="radio" name="genre" value="Coaster" id="PB1" />
                <label htmlFor="PB1" className="filter_list">
                  Coaster
                </label>
              </div>
              <div className="radio_container round-radio">
                <input type="radio" className="radio" name="genre" value="Fusion" id="PB2" />
                <label htmlFor="PB2" className="filter_list">
                  Fusion
                </label>
              </div>
              <div className="radio_container round-radio">
                <input type="radio" className="radio" name="genre" value="Unique" id="PB3" />
                <label htmlFor="PB3" className="filter_list">
                  Unique
                </label>
              </div>
              <div className="radio_container round-radio">
                <input type="radio" className="radio" name="genre" value="Dream" id="PB4" />
                <label htmlFor="PB4" className="filter_list">
                  Dream
                </label>
              </div>
              <div className="radio_container round-radio">
                <input type="radio" className="radio" name="genre" value="Young" id="PB5"/>
                <label htmlFor="PB5" className="filter_list">
                  Young
                </label>
              </div>
              <div className="radio_container round-radio">
                <input type="radio" className="radio" name="genre" value="Green" id="PB6" />
                <label htmlFor="PB6" className="filter_list">
                  Green
                </label>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Book;
