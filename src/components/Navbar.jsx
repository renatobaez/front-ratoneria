import  { useState, useEffect } from "react";
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

  const navbarStyle = {
    backgroundColor: "#292929",
    color: "#FFFFFF",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
  };

  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: "20px",
  };

  const activeLinkStyle = {
    backgroundColor: "#ffa31a",
    borderRadius: "20px",
    padding: "5px 15px",
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <img
          src="https://i.ibb.co/chKMvGK/image.jpg"
          alt="Logo la RatonerIA"
          style={{ width: "100px", marginRight: "20px", padding: "5px" }}
        />
        <h1 style={{ margin: "0", flexGrow: 1, textAlign: "center", fontSize: "24px" }}>La RatonerIA</h1>
      </div>
      <div className={`lg:flex ${showLinks ? "block" : "hidden"}`}>
        <Link to="/" style={{ ...linkStyle, ...(location.pathname === "/" && activeLinkStyle) }}>
          Inicio
        </Link>
        <Link to="/local" style={{ ...linkStyle, ...(location.pathname === "/local" && activeLinkStyle) }}>
          Local
        </Link>
        <Link to="/login" style={{ ...linkStyle, ...(location.pathname === "/login" && activeLinkStyle) }}>
          Inicio de Sesión
        </Link>
        <Link to="/post" style={{ ...linkStyle, ...(location.pathname === "/post" && activeLinkStyle) }}>
          Post
        </Link>
        <Link to="/profile" style={{ ...linkStyle, ...(location.pathname === "/profile" && activeLinkStyle) }}>
          Perfil
        </Link>
        <Link to="/register" style={{ ...linkStyle, ...(location.pathname === "/register" && activeLinkStyle) }}>
          Registro
        </Link>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleLinks} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={showLinks ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
