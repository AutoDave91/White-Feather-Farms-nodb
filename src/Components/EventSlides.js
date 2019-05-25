import React from "react";
import axios from "axios";

function EventSlides(props) {
    console.log("props", props)
  return (
    <main className="events">
      <img className='logo' src={props.eventSlides.image} alt='events' />
      <button onClick={()=>{
          axios.put('/api/events/'+ props.eventSlides.title).then(response =>{
            props.updateEvent(response.data);
        })
      }}>Edit</button>
      <button onClick={()=>{
          axios.delete('/api/events/'+ props.eventSlides.title).then(response =>{
              props.updateEvent(response.data);
          })
      }}>Delete</button>
    </main>
  );
}

export default EventSlides;