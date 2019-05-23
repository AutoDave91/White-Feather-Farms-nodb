import React from 'react';
import Home from './Home';
import Animals from './Animals';
import Family from './Family';
import Events from './Events';

function Display() {
  return (
    <div className="App">
      <Home />
      <Animals />
      <Family />
      <Events />
    </div>
  );
}

export default Display;