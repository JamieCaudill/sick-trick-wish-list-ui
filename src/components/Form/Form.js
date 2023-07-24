// Form.js //

import './Form.css';
import { useState } from 'react';

export default function Form({tricks}) {
  const [stance, setStance] = useState('');
  const [trickName, setTrickName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorialLink, setTutorialLink] = useState('');
  return (
    <form>
      <select id="stance" value={stance} onChange={(e) => setStance(e.target.value)}>
        <option value="">Choose Your Stance</option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input type="text" placeholder="Name of Trick" onChange={(e) => setTrickName(e.target.value)} />
    </form>
  )
}