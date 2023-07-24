// Card.js //

export default function Card({name, obstacle, tutorial}) {
  return (
    <div className="card__container">
      <p>{name}</p>
      <p>{`Obstacle: ${obstacle}`}</p>
      <p>Link to Tutorial:</p>
      <p>{tutorial}</p>
    </div>
  )
}