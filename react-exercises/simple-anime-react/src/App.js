import React from 'react';
import './App.css';
import { Bounce, FadeIn, FadeOut, Pulse, Slide } from './components';

function App() {
  return (
    <div className="App" style={{marginLeft: 100, marginTop: 100 }}>
    
      <div style={{  marginTop: 50 }}>
        <FadeIn config={{ duration: 6000 }}>
          <div>FadeIn</div>
        </FadeIn>
        <FadeOut config={{ duration: 7000 }}>
          <div>FadeOut</div>
        </FadeOut>
      </div>
      <div style={{ height: 100, width: 200, marginLeft: 200 }}>
        <Pulse config={{ duration: 4000 , scalingFactor:2.5 }} >
          <div style={{ color: 'darkgreen'}}>Pulse</div>
          <img src="https://publicdomainvectors.org/photos/pvalencia_Manzana.png" width="80" height="80" ></img>
        </Pulse>
      </div>
      <div>
        <Slide config={{ movement: 'up',distance:150}}>
          <div style={{ color: 'red', height: 100, width: 100 }}>Slide Up</div>
        </Slide>
        <Slide config={{   duration: 4000,movement: 'down',distance:150}}>
          <div style={{ color: 'teal', height: 100, width: 100 }}>Slide Down</div>
        </Slide>
        <Slide config={{  duration: 5000,movement: 'right',distance:300}}>
          <div style={{ color: 'brown', height: 50, width: 80 }}>Slide Right</div>
        </Slide>
        <Slide config={{  duration: 5000,movement: 'left',distance:300}}>
          <div style={{ color: 'blue', height: 50, width: 80 }}>Slide Left</div>
        </Slide>
        
      </div>
      <div style={{ height: 300, width: 300, marginLeft: 200, marginTop: 10 }}>
        <Bounce config={{ easeEffect: 'in', movement: 'down' }}>
          <div style={{ color: 'Tomato', height: 150, duration: 6000,width: 150 }}>Bounce Down</div>
        </Bounce>
        <Bounce config={{ easeEffect: 'out', movement: 'right' }}>
          <div style={{ color: 'maroon', height: 20, width: 150 }}>Bounce Right</div>
        </Bounce>
        <Bounce config={{ easeEffect: 'out', duration: 3000,movement: 'left' }}>
          <div style={{ color: 'midnightblue', height: 20, width: 150 }}>Bounce Left</div>
        </Bounce>
        <br></br>
        <Bounce config={{ easeEffect: 'out',duration: 4000, movement: 'up' }}>
          <div style={{ color: 'green', height: 150, width: 150 }}>Bounce Up</div>
        </Bounce>
      
      </div>
      <div />
    </div>
  );
}

export default App;
