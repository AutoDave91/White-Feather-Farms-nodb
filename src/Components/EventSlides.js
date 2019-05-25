import React from "react";
import axios from "axios";

function EventSlides(props) {
    console.log("props", props)
  return (
    <main className="events">
      <img className='logo' src={props.eventSlides.image} alt='events' />
    </main>
  );
}

export default EventSlides;