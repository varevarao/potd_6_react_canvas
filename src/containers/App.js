import React from 'react';
import CanvasFrame from '../components/CanvasFrame';
import ComponentCanvas from '../components/ComponentCanvas';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <CanvasFrame>
        <ComponentCanvas />
      </CanvasFrame>
    </div>
  );
}

export default App;
