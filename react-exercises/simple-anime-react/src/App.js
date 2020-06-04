import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Bounce} from './components'

function App() {
  return (
    <div className="App">
      <Bounce >
        <div style= {{color:'green',height:200 , width:300}}>Bounce</div>
        {/* <img src="https://en.js.cx/clipart/ball.svg" alt="demo" width="40" height="40"></img> */}
      </Bounce>
    </div>
  );
}

export default App;
