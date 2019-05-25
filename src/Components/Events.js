import React, {Component} from 'react';
import axios from 'axios';
import EventSlides from './EventSlides';
import './Events.css';

class Events extends Component {
    constructor(){
        super();
        this.state ={
            eventSlides: [],
            index:0,
            loading: false,
            error: ''
        }
    }

    componentDidMount(){
        axios
            .get('/api/events')
            .then(response =>{
                this.setState({eventSlides: response.data, loading: false});
            })
            .catch(error =>{
                console.log(error);
                this.setState({loading: false, error: 'An error occurred'})
            })
    }
    updateEvent(newEvent){
        this.setState({eventSlides: newEvent});
    }

    render(){
        const {eventSlides} = this.state
        return (
        <main className="eventsContainer">
        <header className='Header'>
            <img className='logo' src={require('./Pics/logo.jpg')} width='10px' height='10px' alt='logo'/>
            <h1>Events</h1>
        </header>
        <section className='slides'>
                    {eventSlides.map((eventSlides, index)=>(
                        index === this.state.index ? <EventSlides key={index} eventSlides={eventSlides} updateEvent={this.updateEvent} /> : null
                        ))}
                        <button onClick={()=> {if(this.state.index >0){
                        this.setState({index: this.state.index -1})
                    }}}><strong><i className="prev"></i>Previous</strong></button>
                    <button>Add</button>
                    <button onClick={()=>{if(this.state.index < this.state.eventSlides.length -1){
                        this.setState({index: this.state.index +1})}}}>
                    <strong>Next<i className="next"></i></strong></button>
                </section>
            <section className='Social'>
                <button>Facebook</button>
                <button>Email</button>
                <button>Instagram</button>
            </section>
        </main>
        );
    }

}

export default Events;