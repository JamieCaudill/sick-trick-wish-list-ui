// Tricks.js //

import './Tricks.css';
import Card from '../Card/Card';

export default function Tricks({tricks}) {
  const trickCards = tricks.map(trick => {
    return (
      <Card 
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        key={trick.id}
        />
    )
  })

  return (
    <div className='tricks-container'>
      {trickCards}
    </div>
  )

}