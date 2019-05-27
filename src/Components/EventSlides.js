import React from "react";
import axios from "axios";

function EventSlides(props) {
    console.log("props", props)
  return (
    <main className="events">
        <span>{props.eventSlides.image.charAt(0) === '.'

        ? <img className='slides' src={require(`${props.eventSlides.image}`)} alt={props.eventSlides.title} />
        : <img className='slides' src={props.eventSlides.image} alt={props.eventSlides.title} />}
        </span>
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