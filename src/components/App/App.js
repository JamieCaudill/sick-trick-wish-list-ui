import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';


import { getTricks } from '../../api-calls/api-calls';

function App() {
  useEffect(() => {
    getTricks()
  },[])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
