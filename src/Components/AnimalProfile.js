import React from "react";
import axios from "axios";

function AnimalProfile(props) {
    // console.log("props", props)
    console.log(typeof props.animal.image)
  return (
    <main className="animal">
        <span>{props.animal.image.charAt(0) === '.'

        ? <img className='animalImage' src={require(`${props.animal.image}`)} alt={props.animal.species} />
        : <img className='animalImage' src={props.animal.image} alt={props.animal.species} />}
        </span>
        <h3>{props.animal.breed} {props.animal.species}</h3>
        <h3>Age Range: {props.animal.age_range}</h3>
        <h3>Names: {props.animal.names}</h3>
        <h3>Fun Fact : {props.animal.fun}</h3>
    </main>
  );
}

export default AnimalProfile;