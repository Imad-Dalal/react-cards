import React, { useState } from 'react';

const VoitureItem = ({ voiture, onDelete, onChangeColor }) => {
  const [color, setColor] = useState('none');

  //changer la couleur
  const funcChangeColor = () => {
    const newColor = color === 'none' ? 'grayscale(100%)' : 'none';
    setColor(newColor);
    onChangeColor(voiture.matricule); 
  };

  return (
    <div className="card">
      <img src={voiture.image} alt={voiture.marque} style={{ filter: color }} />
      <h3>{voiture.marque}</h3>
      <p>Carburant: {voiture.carburant}</p>
      <p>Prix d'achat: {voiture.prixAchat} $</p>
      <button onClick={funcChangeColor}>Changer Couleur</button>
      <button onClick={() => onDelete(voiture.matricule)}>Supprimer</button>
    </div>
  );
};

export default VoitureItem;
