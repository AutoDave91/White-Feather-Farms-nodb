import React from "react";
import axios from "axios";

function HomeSlides(props) {
    console.log("props", props)
  return (
    <main className="pics">
      <img className='logo' src={props.picSlides.image} alt='Farm pics' />
    </main>
  );
}

export default HomeSlides;