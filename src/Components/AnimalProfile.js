import React from "react";
import axios from "axios";

function AnimalProfile(props) {
  return (
    <main className="Animal">
      <img className='logo' src={props.animal.image} alt={props.animal.species} />
      <section style={{ display: "flex", flexDirection: "column" }}>
        <h3>{props.animal.species}</h3>
        <h3>{props.animal.breed}</h3>
        <h3>{props.animal.ageRange}</h3>
        <h3>{props.animal.name}</h3>
      </section>
    </main>
  );
}

export default AnimalProfile;