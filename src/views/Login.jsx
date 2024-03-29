import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { AuthContext } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

function Login() {
  //verifica si muestra o no el password
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  //Asignar el registro de usuario al userContext
  //token de google para incicar sesion
  const clientID =
    "959939122893-efhseqnnogj59ivjcicdkhah0k3r49dk.apps.googleusercontent.com";

  const onSuccess = (res) => {
    const token = jwtDecode(res.credential);
    setIsLoggedIn(true);
    navigate("/profile");
    /*localStorage.setItem("profileObj", JSON.stringify(res));
    const token = jwtDecode(res.credential);
    console.log(token)
    */
    //window.location.href = "/profile";
  };
  const onFailure = (res) => {
    setUser("", "", "", "");
    console.log("Login failed: res:", res);
  };

  const saveSessionData = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const handleSuccessfulLogin = (username) => {
    setIsLoggedIn(true);
    saveSessionData({ username });
    navigate("/profile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //usuarios falsos para pruebas
    const fictitiousUsers = [
      { username: "admin@mail.cl", password: "admin123" },
      { username: "user@mail.com", password: "password123" },
    ];

    const foundUser = fictitiousUsers.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (foundUser) {
      console.log("Inicio de sesión exitoso:", formData.username);
      handleSuccessfulLogin(formData.username);
    } else {
      console.log("Inicio de sesión fallido: Credenciales incorrectas");
      setFormData({
        username: "",
        password: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   if (localStorage.getItem("email") != null) {
  //     //window.location.href = "/profile";
  //   }
  // }, [0]);

  return (
    <div className="flex h-screen">
      <section
        className="hidden lg:flex lg:w-1/2 items-stretch justify-center"
        style={{
          backgroundImage: "url('/bg_ratoneriac.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link className="w-full" to="/"></Link>
      </section>

      <section className="mx-auto flex items-center ">
        <div className="max-w-md mt-6">
          <picture className="bg-porange mb-4 w-28 h-30 flex rounded-xl m-auto">
            <Link to="/" className="p-2 m-auto">
              <img
                src="https://i.ibb.co/chKMvGK/image.jpg"
                width={120}
                height={50}
                alt="Logo La RatonerIA"
              />
            </Link>
          </picture>
          <h1 className="text-3xl sm:text-2xl font-bold mb-4 mt-2 text-center hidden sm:block">
            Inicia sesión en La RatonerIA
          </h1>
          <div className="w-h-full flex justify-center">
            <GoogleOAuthProvider clientId={clientID}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  onSuccess(credentialResponse);
                  console.log(credentialResponse);
                }}
                onError={() => {
                  onFailure();
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <div className="text-1 font-bold mb-4 mt-2 text-center hidden sm:block">
              -------------
            </div>
            <h1 className="text-1 font-bold mb-4 mt-2 text-center hidden sm:block">
              O
            </h1>
            <div className="text-1 font-bold mb-4 mt-2 text-center hidden sm:block">
              -------------
            </div>
          </div>
          <form className="flex-col w-2/3 m-auto" onSubmit={handleSubmit}>
            <div className="relative max-w-xs">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Ingresa tu email"
                className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              <svg
                className="w-6 h-6 text-gray-400 absolute right-3 inset-y-0 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div>
              <div className="relative max-w-xs mt-2">
                <span
                  className="text-gray-400 absolute right-3 inset-y-2 my-auto active:text-gray-600"
                  onClick={() => setPasswordHidden(!isPasswordHidden)}
                >
                  {isPasswordHidden ? (
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </span>
                <input
                  type={isPasswordHidden ? "password" : "text"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Ingresa tu contraseña"
                  className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div className="w-h-full flex justify-center mt-4">
              <button className="px-7 py-3.5 text-white bg-porange hover:bg-porange-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-indigo-600 focus:ring-2">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
