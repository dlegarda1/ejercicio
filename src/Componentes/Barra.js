//vamos a crear una barra de navegacion
import React from 'react';
import { Link } from 'react-router-dom';

const Barra = () => {
    return (
      <header>
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/inicio">Inicio</Link>
          <Link to="/acerca">acerca</Link>
          <Link to="/registro">registro</Link>
        </nav>
      </header>
    );
  };
export default Barra;