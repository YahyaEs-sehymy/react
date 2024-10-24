import React from 'react';

const App = () => {
  const tasks = [
    { id: 1, name: 'Faire les courses', completed: true },
    { id: 2, name: 'Lire un livre', completed: false },
    { id: 3, name: 'Faire du sport', completed: true },
    { id: 4, name: 'Préparer le diner', completed: false },
  ];

  const completedTasks = tasks.filter(value => value.completed === true);

  return (
    <div>
      <h1>Liste des Tâches Complètes</h1>
      <ul>
        {completedTasks.map(value => (
          <li key={value.id}>{value.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
