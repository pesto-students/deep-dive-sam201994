import React from 'react';
import './App.css';

import { Bounce, FadeIn, FadeOut, Pulse } from './components';

function App() {
  return (
    <div className="App">
      <div>
        <FadeIn config={{duration: 4000}}>
          <div>FadeIn</div>
        </FadeIn>
        <FadeOut config={{duration: 3000}}>
          <div>FadeOut</div>
        </FadeOut>
      </div>

      <div style={{ height: 300, width: 300, marginLeft: 300, marginTop: 300 }}>
        <Bounce config={{ easeEffect: 'out', movement: 'up' }}>
          <div style={{ color: 'green', height: 200, width: 200 }}>Bounce</div>
        </Bounce>
      </div>
      <div>
        <Pulse color={"red"} diameter={80}  speed={40} />
      </div>
    </div>
  );
}

export default App;
