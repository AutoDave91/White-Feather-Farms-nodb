import React from 'react';
import './Events.css';

function Events() {
  return (
    <main className="eventsContainer">
      <header className='Header'>
        <img src='' alt='logo'/>
        <h1>Events</h1>
      </header>
        <section>
            <p>Event Slides</p>
        </section>
        <section className='Social'>
            <button>Facebook</button>
            <button>Email</button>
            <button>Instagram</button>
        </section>
    </main>
  );
}

export default Events;