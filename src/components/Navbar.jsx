import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [showLinks, setShowLinks] = useState(window.innerWidth > 1024); // Inicialización según el ancho de la ventana
  const location = useLocation();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-pdark-grey text-white font-sans text-xl py-2 px-4 flex justify-between items-center border-b border-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      <div className="flex items-center">
        {/* Logo clickeable */}
        <Link to="/">
          <img
            src="https://i.ibb.co/chKMvGK/image.jpg"
            alt="Logo la RatonerIA"
            className="w-20 mr-4 p-1"
          />
        </Link>
        {/* Nombre del sitio */}
        <h1 className="text-xl font-semibold">La RatonerIA</h1>
      </div>
      {/* Botón para mostrar/ocultar enlaces en dispositivos móviles y enlaces */}
      <div className="flex items-center">
        {/* Enlaces */}
        <div className={`lg:flex ${showLinks ? "block" : "hidden"}`}>
          <NavLink to="/login" currentPath={location.pathname}>
            Inicio de Sesión
          </NavLink>
          <NavLink to="/register" currentPath={location.pathname}>
            Registro
          </NavLink>
        </div>
        {/* Botón para mostrar/ocultar enlaces en dispositivos móviles */}
        <div className="lg:hidden">
          <button onClick={toggleLinks}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showLinks ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

// Componente para los enlaces de navegación
const NavLink = ({ to, currentPath, children }) => (
  <Link
    to={to}
    className={`text-white mr-4 ${currentPath === to ? "bg-porange rounded-full px-3 py-1" : ""}`}
  >
    {children}
  </Link>
);

export default Navbar;
