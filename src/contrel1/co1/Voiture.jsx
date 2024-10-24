import React from 'react';

const Voiture = ({ voiture }) => {
  return (
    <div>
      <h2>{voiture.titre}</h2>
      <p>Catégorie: {voiture.catégorie}</p>
      <p>Prix: {voiture.prix} MAD</p>
      {/* <img src={voiture.photo} alt={voiture.titre} style={{ width: '200px', height: '150px' }} /> */}
      {/* <img src={`/images/${voiture.photo}`} alt={voiture.titre} style={{ width: '200px', height: '150px' }} /> */}
      <img src={`./pictures/${voiture.photo}`} alt={voiture.titre} style={{ width: '200px', height: '150px' }} />


    </div>
  );
};

export default Voiture;
