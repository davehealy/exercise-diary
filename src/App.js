// src/App.js
import React from 'react';
import './App.css';
import Exercise from './Exercise';

function App() {
  return (
    <div className="App">
      <h1>Exercise Diary:</h1>
      <Exercise title="Crab Walk with Band" image="crab-walk.jpg" />
      <Exercise title="Calf Heel Raise Two Legs" image="calf-heel-raise.jpg" />
      {/* Add more exercises as needed */}
    </div>
  );
}

export default App;