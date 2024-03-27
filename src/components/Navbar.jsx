import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const navigation = [];

  const activeButton = location.pathname === "/login" ? "login" : "register";

  return (
    <nav
      className="bg-pdark-grey  font-sans text-xl py-2 px-4"
      style={{ fontFamily: "Rajdhani, sans-serif" }}
    >
      <div className="flex items-center justify-evenly max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              className="lg:w-[150px] w-[100px]"
              src="https://i.ibb.co/Qf7cfXH/image.jpg" // Cambié la URL del logo
              alt="Logo La RatonerIA"
            />
            <div className="flex gap-2 items-center">
              <h1 className=" text-white lg:text-[50px]  text-[24px] font-semibold ml-2 hidden sm:block">
                LA RATONER
              </h1>
              <div className="  font-bold bg-porange lg:text-[50px] text-[45px] rounded-sm">
                <h1 className="p-2">IA</h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:ml-auto">
          {navigation.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="text-gray-700 hover:text-indigo-600 ml-4"
            >
              {item.title}
            </a>
          ))}
          <Link
            to="/login"
            className={`text-white hover:text-indigo-600 ml-4 rounded-md px-3 py-1 ${
              activeButton === "login" ? "bg-porange" : ""
            }`}
          >
            INICIAR SESION
          </Link>
          <Link
            to="/register"
            className={`font-bold text-black hover:text-indigo-600 text-[20px] rounded-sm p-2 ${
              activeButton === "register" ? "bg-porange" : ""
            }`}
          >
            REGISTRARSE
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${showMenu ? "block" : "hidden"}`}>
        <div className="flex items-center justify-center">
          {navigation.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="text-gray-700 hover:text-indigo-600 my-2"
            >
              {item.title}
            </a>
          ))}
          <Link
            to="/login"
            className={`text-white hover:text-indigo-600 ml-4 rounded-md px-3 py-1 ${
              activeButton === "login" ? "bg-porange" : ""
            }`}
          >
            INICIAR SESION
          </Link>
          <Link
            to="/register"
            className={`font-bold text-black hover:text-indigo-600 text-[20px] rounded-sm p-2 ${
              activeButton === "register" ? "bg-porange" : ""
            }`}
          >
            REGISTRARSE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
