import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

function Login2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const fictitiousUsers = [
    { username: "admin@mail.cl", password: "admin123" },
    { username: "user@mail.com", password: "password123" },
  ];

  const onSubmit = (data) => {
    const foundUser = fictitiousUsers.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );

    if (foundUser) {
      console.log("Inicio de sesión exitoso:", data.username);
      setIsLoggedIn(true);
      navigate("/profile");
    } else {
      console.log("Inicio de sesión fallido: Credenciales incorrectas");
    }
  };

  useEffect(() => {
    console.log("El estado de isLoggedIn es:", isLoggedIn);
  }, [isLoggedIn]);

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
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2">
                Usuario:
              </label>
              <input
                type="text"
                id="username"
                {...register("username", { required: true })}
                className="w-full p-2 border rounded-lg"
                autoComplete="off"
              />
              {errors.username && (
                <p className="text-red-500">Usuario requerido</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className="w-full p-2 border rounded-lg"
                autoComplete="off"
              />
              {errors.password && (
                <p className="text-red-500">Contraseña requerida</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Entrar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login2;
