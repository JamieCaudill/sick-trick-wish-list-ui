// Form.js //

import './Form.css';
import { useState } from 'react';

export default function Form({tricks, addTrick}) {
  const [stance, setStance] = useState('');
  const [trickName, setTrickName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorialLink, setTutorialLink] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newTrick = {
      name: trickName,
      stance: stance,
      obstacle: obstacle, 
      tutorial: tutorialLink,
      id: (tricks.length + 1)
    }
    addTrick(newTrick);
  }

  return (
    <div className="form__container">
      <form>
        <select className="form__item" id="stance" value={stance} onChange={(e) => setStance(e.target.value)}>
          <option value="">Choose Your Stance</option>
          <option value="Regular">Regular</option>
          <option value="Switch">Switch</option>
        </select>
        <input className="form__item" type="text" placeholder="Name of Trick" onChange={(e) => setTrickName(e.target.value)} />
        <select className="form__item" id="obstacle" value={obstacle} onChange={(e) => setObstacle(e.target.value)}>
          <option value="">Choose your Obstacle</option>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>
        <input className="form__item" type="text" placeholder="Link to Tutorial" onChange={(e) => setTutorialLink(e.target.value)}/>
        <button className="form__item" type="submit" onClick={(e) => handleSubmit(e)}>Send It!</button>
      </form>
    </div>
  )
}