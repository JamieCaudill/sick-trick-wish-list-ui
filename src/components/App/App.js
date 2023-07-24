import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';


import { getTricks, postNewTrick } from '../../api-calls/api-calls';
import Tricks from '../Tricks/Tricks';
import Form
 from '../Form/Form';
function App() {
  const [error, setError] = useState();
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    const response = getTricks()
    response.then(data => {
      setTricks(data)
    })
    .catch(error => {console.log(error)})
      // print error on DOM
  },[])

  const addTrick = (newTrick) => {
    postNewTrick(newTrick)
    .then(data => {
      console.log(data)
    })
    .catch(error => console.log(error))
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form tricks={tricks} addTrick={addTrick}/>
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App; 
