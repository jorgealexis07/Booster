import React from 'react';
import '../css/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <a href="/">Volver a la página de inicio</a>
    </div>
  );
};

export default NotFound;
