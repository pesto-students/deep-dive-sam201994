import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Bounce } from './components';

function App() {
  return (
    <div className="App">
      <Bounce config={{ reverse: false }}>
        <div style={{ color: 'green', height: 200, width: 300 }}>Bounce</div>
      </Bounce>
    </div>
  );
}

export default App;
