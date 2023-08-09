import React from 'react';
import { Link } from 'react-router-dom';
import SiparisFormu from '../components/SiparisFormu';

const AnaSayfa = () => {
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <h2>KOD ACIKTIRIR PİZZA DOYURUR</h2>
      <Link to="/pizza" id="order-pizza">
        ACIKTIM
      </Link>
      <SiparisFormu />
    </div>
  );
};

export default AnaSayfa;