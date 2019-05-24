import React, {Component} from 'react';
import './Home.css';
import homePics from './homePics';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            index: 0
        }
    }
    
    render(){
        console.log(this.state.index)
        let pics = homePics;
        return (
            <main className="homeContainer">
                <header>
                    <img className='main-logo' src={require('./Pics/main-logo.jpg')} width='10px' height='10px' alt='full White Feather Farms logo'/>
                </header>
                <section>
                    <p>Pics</p>
                    <img className='slides' src={pics[this.state.index]} />
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

export default Home;

// 57pts as of 12:40PM May 24th