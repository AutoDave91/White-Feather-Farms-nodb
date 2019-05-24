import React from "react";
import axios from "axios";

function AnimalProfile(props) {
    console.log("props", props)
    // if(!props.animal){
    //     return null;
    // }
  return (
    <main className="animal">
      <img className='logo' src={props.animal.image} alt={props.animal.species} />
      <section style={{ display: "flex", flexDirection: "column" }}>
        <h3>{props.animal.species}</h3>
        <h3>{props.animal.breed}</h3>
        <h3>Age Range: {props.animal.age_range}</h3>
        <h3>Names: {props.animal.names}</h3>
        <h3>Fun Fact : {props.animal.fun}</h3>
        <button>Edit</button>
      </section>
    </main>
  );
}

export default AnimalProfile;