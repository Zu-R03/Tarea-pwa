// src/components/Home.js

import React from 'react';
import './Home.css'; // Asegúrate de importar el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h2 className="home-title">Bienvenido a la Aplicación</h2>
        <p className="home-message">Has iniciado sesión con éxito.</p>
        <button className="home-button" onClick={() => alert('Has cerrado sesión.')}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Home;
