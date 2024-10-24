import React, { useState } from 'react';


export default function Counter({ initialCount = 0 }) { 
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h1>Compteur: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button onClick={() => setCount(count - 1)}>Décrémenter</button>
    </div>
  );
}

