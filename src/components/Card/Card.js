// Card.js //

import './Card.css';

export default function Card({name, obstacle, tutorial}) {
  return (
    <div className="card">
      <p>{name}</p>
      <p>{`Obstacle: ${obstacle}`}</p>
      <p>Link to Tutorial:</p>
      <p>{tutorial}</p>
    </div>
  )
}