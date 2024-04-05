import Avatar from '../components/Avatar'; // Importa el componente Avatar
//import Card from '../components/Card'; // Importa el componente Card
import { Link } from 'react-router-dom'; // Importa la función Link

function Profile() {
  // Define el componente Profile
  return (
    <>
      <div className="p-5">
        {' '}
        {/* Contenedor de Avatar con padding */}
        <Avatar>
          {' '}
          {/* Renderiza el componente Avatar */}
          <div></div>
        </Avatar>
      </div>
      <div className="flex flex-col items-center">
        {' '}
        {/* Contenedor principal de las cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-10">
          {' '}
          {/* Grid con diferentes columnas */}
          <Link to="/">
            {' '}
            {/* Enlace al local 2 */}
            <div className="relative w-full h-full">
              {' '}
              {/* Contenedor car */}
              <p className="text-white">aqui ira la card</p>
              <div className="absolute bottom-2 left-0 w-full flex justify-center">
                {' '}
                {/* Botón de edición */}
                <Link to="/Post">
                  {' '}
                  {/* Enlace a la página de edición, no me resulta, hay que crear la ruta */}
                  <button className="bg-porange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    {' '}
                    {/* Estilo del botón */}
                    Editar
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
