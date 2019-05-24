import React, {Component} from 'react';
// import FamilyProfile from './FamilyProfile';
import './Family.css';

class Family extends Component {
    constructor(){
        super();
        this.state = {
            index:0
        }
    }
    render(){
        return (
          <main className="familyContainer" id='Family'>
            <header>
              <img className='logo' src={require('./Pics/logo.jpg')} width='10px' height='10px' alt='logo'/>
              <h1>Family</h1>
            </header>
            <section>
                {/* {animals.map((animal, index)=>(
                        index === this.state.index ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))}
                    {animals.map((animal, index)=>(
                        index === this.state.index+1 ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))} */}
                <button onClick={()=> {if(this.state.index >=2){
                        this.setState({index: this.state.index -2})
                    }}}><strong><i className="prev"></i>Previous</strong></button>
                <button onClick={()=>{ this.setState({index: this.state.index +2})}}>
                    <strong>Next<i className="next"></i></strong></button>
            </section>
          </main>
        );
    }
}

export default Family;