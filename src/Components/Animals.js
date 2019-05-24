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
            error: '',
            userSearch: ''
        }
        this.updateAnimals = this.updateAnimals.bind(this);
    }

    componentDidMount(){
        axios
            .get('/api/animals')
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
    allAnimals(){
        axios.get('/api/animals')
            .then(res => this.setState({animals: res.data}))
            .catch(error =>{
                console.log(error);
                this.setState({loading: false, error: 'An error occurred'})
            })
    }
    pastureAnimals() {
        axios.get('/api/animals/filter?location=Pasture')
          .then(res => this.setState({ animals: res.data }))
    }
    yardAnimals() {
        axios.get('/api/animals/filter?location=yard')
            .then(res => this.setState({ animals: res.data }))
    }
    handleChange(text){
        this.setState({userSearch: text});
    }
    searchAnimals(){
        axios.get(`/api/animals/${this.state.userSearch}`)
            .then(res => this.setState({animals: res.data }))
    }

    render(){
        console.log(this.state.animals)
        console.log(this.state.index)
        const {animals} = this.state;
        return (
            <main className="animalsContainer">
                <header>
                    <img className='logo' src={require('./Pics/logo.jpg')} width='10px' height='10px' alt='logo'/>
                    <h1>Animals</h1>
                </header>
                <section className='animal-buttons1'>
                    <button onClick={() => this.pastureAnimals()}>Pasture</button>
                    <button onClick={() => this.allAnimals()}>All</button>
                    <button onClick={() => this.yardAnimals()}>Yard</button>
                </section>
                <section className='animals'>
                    {animals.map((animal, index)=>(
                        index === this.state.index ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))}
                    {animals.map((animal, index)=>(
                        index === this.state.index+1 ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))}
                    {animals.map((animal, index)=>(
                        index === this.state.index+2 ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))}
                    {animals.map((animal, index)=>(
                        index === this.state.index+3 ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))}
                    </section>
                    <section className='animal-buttons2'>
                        <button onClick={()=> {if(this.state.index >=4){
                            this.setState({index: this.state.index -4})
                        }}}><strong><i className="prev"></i>Previous</strong></button>
                        <section className='search'>
                            <input type='field' placeholder='search species' onChange={(e) => this.handleChange(e.target.value)} />
                            <button onClick={()=> {this.searchAnimals(this.state.userSearch)}}>Search</button>
                        </section>
                        <button onClick={()=>{ this.setState({index: this.state.index +4})}}>
                        <strong>Next<i className="next"></i></strong></button>
                    </section>
            </main>
        );
    }
}

export default Animals;