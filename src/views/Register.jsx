import { useState } from "react"

function Register() {
  const [isPasswordHidden, setPasswordHidden] = useState(true)
  return (
    <>
    <div className="flex flex-col items-center mt-5 border-2 bg-porange border-pdark w-1/2 mx-auto" >
      <h1 className="text-3xl font-bold">CREA TU CUENTA</h1>
      <h2 className="text-xl">INGRESE SUS DATOS</h2>
      </div>
      <div className="relative max-w-xs w-full mt-5 mb-5 mx-auto md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0  -500 ">
            <input
                type="text"
                placeholder="Nombre y Apellido"
                className="w-full pl-12 pr-3 py-2 color-white bg-pgrey outline-none border focus:border-indigo-600 shadow-sm rounded-lg mb-2"
            />
            <input
                type="text"
                placeholder="Nickname"
                className="w-full pl-12 pr-3 py-2 text-white-500 bg-pgrey outline-none border focus:border-indigo-600 shadow-sm rounded-lg mb-2"
            />
            <div className="relative max-w-xs">
            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <input
                type="text"
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2  bg-pgrey outline-none border focus:border-indigo-600 shadow-sm rounded-lg mb-2"
            />
        </div>
            <div className="relative max-w-xs ">
                <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                    onClick={() => setPasswordHidden(!isPasswordHidden)}
                >
                    {
                        isPasswordHidden ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        )
                    }
                </button>
                <input
                    type={isPasswordHidden ? "password" : "text"}
                    placeholder="Contraseña"
                    className="w-full pr-12 pl-3 py-2 text-gray-500 bg-pgrey outline-none border focus:border-indigo-600 shadow-sm rounded-lg mb-2"
                />
            </div>
            <div className="relative max-w-xs ">
                <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                    onClick={() => setPasswordHidden(!isPasswordHidden)}
                >
                    {
                        isPasswordHidden ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        )
                    }
                </button>
                <input
                    type={isPasswordHidden ? "password" : "text"}
                    placeholder="Confirmar Contraseña"
                    className="w-full pr-12 pl-3 py-2 text-gray-500 bg-pgrey outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
            </div>
        </div >
        <div className="flex flex-col items-center">
        <button className="   px-7 py-3.5 text-white bg-porange hover:bg-porange-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-indigo-600 focus:ring-2">
               Crear Cuenta
            </button>
            </div>
    </>
  );
}

export default Register;
