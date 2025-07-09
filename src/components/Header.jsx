import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-center gap-6 bg-blue-600 text-white py-4 mb-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'underline font-semibold' : 'hover:underline'
        }
      >
        Buscar Clima
      </NavLink>
      <NavLink
        to="/favoritos"
        className={({ isActive }) =>
          isActive ? 'underline font-semibold' : 'hover:underline'
        }
      >
        Favoritos
      </NavLink>
    </nav>
  );
};

export default Header;
