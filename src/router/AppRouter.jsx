import React from 'react';
import Bar from '../components/navegacion/bar/Bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../screens/Inicio";
import Analisis from "../screens/Analisis";
import Galeria from "../screens/Galeria";
import Rutas from "../screens/Rutas";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function AppRouter() {
  return (
    <React.Fragment>
        <Router>
          {<Bar/>}
          <Routes path="/">
              <Route path="/" element={<Inicio />} />
              <Route path="/Inicio" element={<Inicio />} />
              <Route path="/Analisis" element={<Analisis />} />
              <Route path="/Galeria" element={<Galeria />} />
              <Route path="/Rutas" element={<Rutas />} />
          </Routes>
        </Router>
    </React.Fragment>
  )
}

export default AppRouter