import React, { useState } from "react";
import '../../../styles/Home/banner.css';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const CARDS = 20;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className='card_slider'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = () => {
  const [active, setActive] = useState(2);
  const count = CARDS; // Using the constant value

  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline
       /></button>}
      {[...new Array(count)].map((_, i) => (
        <div className='card_slider-container' style={{
          '--active': i === active ? 1 : 0,
          '--offset': (active - i) / 3,
          '--direction': Math.sign(active - i),
          '--abs-offset': Math.abs(active - i) / 3,
          'pointer-events': active === i ? 'auto' : 'none',
          'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}>
          <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline /></button>}
    </div>
  );
};

export default Carousel;


