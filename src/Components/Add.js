import React, { Component } from "react";
import axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      location: '',
      species: '',
      breed: '',
      age_range: '',
      names: '',
      fun: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        onSubmit={e => {
          e.preventDefault();
          axios
            .post("/api/animals", {
              image: this.state.image,
              location: this.state.location,
              species: this.state.species,
              breed: this.state.breed,
              age_range: this.state.age_range,
              names: this.state.names,
              fun: this.state.fun
            })
            .then(response => {
              this.props.changeView("wishes");
            })
            .catch(error => {
              console.log(error);
            });
        }}
      >
        <input name="image" onChange={this.handleChange} placeholder="Image" />
        <input name="location" onChange={this.handleChange} placeholder="location" />
        <input name="species" onChange={this.handleChange} placeholder="species" />
        <input name="breed" onChange={this.handleChange} placeholder="breed" />
        <input name="age_range" onChange={this.handleChange} placeholder="age_range" />
        <input name="names" onChange={this.handleChange} placeholder="Names" />
        <input name="fun" onChange={this.handleChange} placeholder="fun fact" />
        <button type="reset">Cancel</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Add;