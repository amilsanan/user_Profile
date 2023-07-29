import React from "react";
import Navbar from "../components/Navbar";
import { useSnapCarousel } from 'react-snap-carousel';
function LandingPage() {
    const { scrollRef } = useSnapCarousel();
  return <div>
    <Navbar/>
    <ul
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'auto',
        scrollSnapType: 'x mandatory'
      }}
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <li
          style={{
            backgroundColor: 'aqua',
            fontSize: '50px',
            width: '100%',
            height: '250px',
            flexShrink: 0,
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}aqua
        >
          Item {i}
        </li>
      ))}
    </ul>
    
  </div>;
}

export default LandingPage;
