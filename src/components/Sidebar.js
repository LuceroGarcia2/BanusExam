import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png'; // Ruta actualizada

const Sidebar = () => {
  return (
    <aside>
      <div className="logo-container">
        <img src={logo} alt="Refresqueria Banus Logo" className="logo" />
        <h1>Refresqueria Banus</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/inventory">Inventario</NavLink>
          </li>
          <li>
            <NavLink to="/reports">Reportes</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Configuración</NavLink>
          </li>
          <li>
          <NavLink to="/garficas">Graficas</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
