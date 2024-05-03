import React from 'react';
import './App.css';
import {Rutas} from './Componentes/Rutas'
import { RouterProvider } from "react-router-dom";


function App() {
  
  return (
    <div className="App">      
     <RouterProvider router={Rutas} />
    </div>
  );
}

export default App;
