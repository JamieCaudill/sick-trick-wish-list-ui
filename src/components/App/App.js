import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';


import { getTricks } from '../../api-calls/api-calls';

function App() {
  const [error, setError] = useState();

  useEffect(() => {
    getTricks()
      .then(data => {
        console.log(data)
      })
      .catch(error => {console.log(error)})
      // print error on DOM
  },[])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
