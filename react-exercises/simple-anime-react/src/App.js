import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Bounce } from './components';

function App() {
  return (
    <div className="App">
      <div style={{ height: 300, width: 300, marginLeft: 300, marginTop: 300 }}>
        <Bounce config={{ easeEffect: 'out', movement: 'up' }}>
          <div style={{ color: 'green', height: 200, width: 200 }}>Bounce</div>
        </Bounce>
      </div>
    </div>
  );
}

export default App;
