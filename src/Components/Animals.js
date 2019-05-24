import React, {Component} from 'react';
import axios from 'axios';
import AnimalProfile from './AnimalProfile'
import './Animals.css';

class Animals extends Component {
    constructor(){
        super();
        this.state = {
            animals:[],
            loading: true,
            index:0,
            error: ''
        }
        this.updateAnimals = this.updateAnimals.bind(this);
    }

    componentDidMount(){
        axios
            .get('/api/Animals')
            .then(response =>{
                this.setState({animals: response.data, loading: false});
            })
            .catch(error =>{
                console.log(error);
                this.setState({loading: false, error: 'An error occurred'})
            })
    }
    updateAnimals(newAnimals){
        this.setState({animals: newAnimals});
    }

    render(){
        console.log(this.state.animals)
        const {animals} = this.state;
        return (
            <main className="animalsContainer">
                <header>
                    <img className='logo' src={require('./Pics/logo.jpg')} width='10px' height='10px' alt='logo'/>
                    <h1>Animals</h1>
                </header>
                <section>
                    {animals.map((animal, index)=>(
                        <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} />
                    ))}
                    <button onClick={()=> {if(this.state.index >0){
                        this.setState({index: this.state.index -1})
                    }}}><strong><i className="prev"></i>Previous</strong></button>
                    <button onClick={()=>{ this.setState({index: this.state.index +1})}}>
                    <strong>Next<i className="next"></i></strong></button>
                </section>
            </main>
        );
    }
}

export default Animals;