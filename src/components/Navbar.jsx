import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center border border-red-500">
      <div>
        <p>Logo</p>
      </div>
      <div className="flex">
        <Link to="/" className="mr-4">
          Inicio
        </Link>
        <Link to="/local" className="mr-4">
          Local
        </Link>
        <Link to="/login" className="mr-4">
          Inicio de Sesión
        </Link>
        <Link to="/post" className="mr-4">
          Post
        </Link>
        <Link to="/profile" className="mr-4">
          Perfil
        </Link>
        <Link to="/register" className="mr-4">
          Registro
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
