import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Components/Game/Quiz';

function App() {
  return (
    <div className="App">
      <div className='App-header'> Trivia Game</div>
      <Quiz/>
    </div>
  );
}

export default App;
