import React, { useState } from 'react';
import VoitureItem from './VoitureItem';

import toyota from '../images/toyota.jpg';
import bmw from '../images/bmw.png';
import tesla from '../images/tesla.jpg';


const VoitureList = () => {
  const [voitures, setVoitures] = useState([
    { matricule: 'ABC1234', marque: 'Toyota', image: toyota , carburant: 'Essence', prixAchat: 15000 },
    { matricule: 'DEF1234', marque: 'BMW', image: bmw, carburant: 'Diesel', prixAchat: 35000 },
    { matricule: 'GHI1234', marque: 'Tesla', image: tesla, carburant: 'Diesel', prixAchat: 50000 },
  ]);

  //supprission de voiture
  const funcDelete = (matricule) => {
    const voituresFiltre = voitures.filter((voiture) => voiture.matricule !== matricule);
    setVoitures(voituresFiltre);
  };

  //changer la couleur 
  const funcChangeColor = (matricule) => {
    
  };

  
  const totalVoitures = voitures.length;
  const voituresParMarque = voitures.reduce((acc, voiture) => {
    acc[voiture.marque] = (acc[voiture.marque] || 0) + 1;
    return acc;
  }, {});

  const voitureMaxPrix = voitures.reduce((max, voiture) => {
    return voiture.prixAchat > max.prixAchat ? voiture : max;
  }, voitures[0]);

  return (
    <div>
      <h1>Liste des Voitures</h1>
      <div className="list-voitures">
        {voitures.map((voiture) => (
          <VoitureItem
            key={voiture.matricule}
            voiture={voiture}
            onDelete={funcDelete}
            onChangeColor={funcChangeColor}
          />
        ))}
      </div>
      <div className='status'>
        <p>Total de voitures: {totalVoitures}</p>
        <p>Voitures par marque:</p>
        <ul>
          {Object.keys(voituresParMarque).map((marque) => (
            <li key={marque}>
              {marque}: {voituresParMarque[marque]}
            </li>
          ))}
        </ul>
        <p>Voiture la plus chère: {voitureMaxPrix.marque} - {voitureMaxPrix.prixAchat} $</p>
      </div>
    </div>
  );
};

export default VoitureList;
