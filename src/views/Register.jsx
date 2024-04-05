import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//const isSubmit = (data) => console.log(data);

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const password = watch('pass');

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users', {
        first_name: data.nombre,
        last_name: data.apellido,
        email: data.mail,
        nickname: data.nickname,
        password: data.pass,
      }); // Realiza la solicitud POST a la ruta /api/v1/users
      console.log(response.data); // Maneja la respuesta del servidor como desees
      //isSubmit(data); // Llama a la función isSubmit y pasa los datos del formulario
      setRegistrationSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setRegistrationError('El correo electrónico ya ha sido registrado.');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        console.log('Error al enviar la solicitud:', error);
      }
    }
  };
  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex h-screen">
      <section
        className="hidden lg:flex lg:w-1/2 items-stretch justify-center"
        style={{
          backgroundImage: "url('/bg_ratoneriac.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Link className="w-full" to="/"></Link>
      </section>
      <section className="mx-auto flex items-center">
        <div className="relative max-w-xs w-full mt-20 mb-5 mx-auto">
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
            Crear Cuenta
          </h1>
          <h1 className="text-3xl sm:text-2xl font-bold mb-4 mt-2 text-center hidden sm:block">
            Ingrese sus datos
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register('nombre', { required: true })}
              placeholder="Nombre"
              autoComplete="off"
              className="w-full pr-12 pl-3 py-2 placeholder:text-gray-500 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg mb-2"
            />
            {errors.nombre && <span>Campo obligatorio</span>}
            <input
              type="text"
              {...register('apellido', { required: true })}
              placeholder="Apellido"
              autoComplete="off"
              className="w-full pr-12 pl-3 py-2 placeholder:text-gray-500 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg mb-2"
            />
            {errors.apellido && <span>Campo obligatorio</span>}
            <input
              type="text"
              {...register('nickname', { required: true })}
              placeholder="Nickname"
              autoComplete="off"
              className="w-full pr-12 pl-3 py-2 placeholder:text-gray-500 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg mb-2"
            />
            {errors.nickname && <span>Campo obligatorio</span>}

            <div className="relative max-w-xs">
              <svg
                className="w-6 h-6 text-gray-400 absolute right-3  mt-2 my-auto   "
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
              <input
                type="email"
                {...register('mail', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Expresión regular para validar el formato de correo electrónico
                })}
                placeholder="E-mail"
                className="w-full pr-12 pl-3 py-2 placeholder:text-gray-500 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg mb-2"
              />
              {errors.mail && errors.mail.type === 'required' && (
                <span>Campo obligatorio</span>
              )}
              {errors.mail && errors.mail.type === 'pattern' && (
                <span>Formato de correo electrónico inválido</span>
              )}
            </div>
            <div className="relative max-w-xs">
              <button
                type="button"
                className="text-gray-400 absolute right-3  mt-2 my-auto active:text-gray-600"
                onClick={() => setPasswordHidden(!isPasswordHidden)}
              >
                {isPasswordHidden ? (
                  <svg
                    className="w-6 h-6 "
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
              </button>
              <input
                type={isPasswordHidden ? 'password' : 'text'}
                {...register('pass', { required: true })}
                placeholder="Contraseña"
                autoComplete="off"
                className="w-full pr-12 pl-3 py-2 placeholder:text-gray-500 bg-transparent outline-none border focus:border-porange  shadow-sm rounded-lg mb-2"
              />
              {errors.pass && <span>Campo obligatorio</span>}
            </div>
            <div className="relative max-w-xs ">
              <button
                type="button"
                className="text-gray-400 absolute right-3  mt-2 my-auto active:text-gray-600"
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
                    className="w-6 h-6 mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
              <input
                type={isPasswordHidden ? 'password' : 'text'}
                name="confirmPassword"
                autoComplete="off"
                {...register('confirmPass', {
                  required: true,
                  validate: (value) => value === password, // Validación personalizada para verificar que la confirmación de contraseña sea igual a la contraseña
                })}
                placeholder="Confirmar Contraseña"
                className="w-full pr-12 pl-3 py-2 placeholder:text-gray-500 bg-transparent  outline-none border focus:border-porange  shadow-sm rounded-lg mb-2"
              />
              {errors.confirmPass && errors.confirmPass.type === 'required' && (
                <span>Campo obligatorio</span>
              )}
              {errors.confirmPass && errors.confirmPass.type === 'validate' && (
                <span>Las contraseñas no coinciden</span>
              )}
            </div>
            <div className="flex flex-col items-center">
              <div>
                <input
                  type="submit"
                  className="font-bold bg-porange text-[18px] rounded-sm p-2"
                />
              </div>
            </div>
          </form>
          {registrationSuccess && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded shadow-md">
                <p className="text-green-600 font-bold">¡Registro exitoso!</p>
              </div>
            </div>
          )}
          {showAlert && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded shadow-md">
                <p className="text-red-600 font-bold">{registrationError}</p>
                <button
                  onClick={closeAlert}
                  className="text-sm text-gray-500 mt-2 focus:outline-none"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
export default Register;
