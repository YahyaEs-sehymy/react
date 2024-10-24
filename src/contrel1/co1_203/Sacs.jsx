import React from 'react';

const Sacs = ({ sac }) => {
  return (
    <div className="sac">
      <img src={sac.image} alt={sac.marque} style={{ width: '200px', height: '150px' }} />
      <h2>{sac.marque}</h2>
      <p>Couleur: {sac.couleur}</p>
      <p>Prix: {sac.prix} MAD</p>
    </div>
  );
};
export default Sacs;
