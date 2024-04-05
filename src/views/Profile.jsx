import Avatar from '../components/Avatar'; // Importa el componente Avatar
import Card from '../components/Card'; // Importa el componente Card
import { Link } from 'react-router-dom'; // Importa la función Link

function Profile() { // Define el componente Profile
  return (
    <>
      <div className="p-5"> {/* Contenedor de Avatar con padding */}
        <Avatar> {/* Renderiza el componente Avatar */}
          <div></div>
        </Avatar>
      </div>
      <div className="flex flex-col items-center"> {/* Contenedor principal de las cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-10"> {/* Grid con diferentes columnas */}
          <Link to="/local/d46fa366-bad5-48ea-90b3-62d9b0e30c58"> {/* Enlace al local 1 */}
            <div className="relative w-full h-full"> {/* Contenedor card */}
              <Card
                key="d46fa366-bad5-48ea-90b3-62d9b0e30c58"
                id="d46fa366-bad5-48ea-90b3-62d9b0e30c58"
                title="Bar 1"
                img="https://i.pinimg.com/originals/b0/cb/52/b0cb52a3da954d39ddd4f8e49ec8cb30.jpg" /* URL de la imagen */
                rating="5"
                category="bar"
              />
              <div className="absolute bottom-2 left-0 w-full flex justify-center">
                <Link to="/post"> {/* Enlace a la página de edición no me resulta , hay que crear la ruta */}
                  <button className="bg-porange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"> {/* Estilo del botón */}
                    Editar
                  </button>
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/local/7efdf6a5-a5dd-4c3d-b70a-642755dc01b7"> {/* Enlace al local 2 */}
            <div className="relative w-full h-full"> {/* Contenedor car */}
              <Card
                key="7efdf6a5-a5dd-4c3d-b70a-642755dc01b7"
                id="7efdf6a5-a5dd-4c3d-b70a-642755dc01b7"
                title="Bar 2"
                img="https://media.traveler.es/photos/652e9e2c1a6a8e2a79e99e24/1:1/w_900,h_900,c_limit/Sips.jpg"
                rating="5"
                category="bar"
              />
              <div className="absolute bottom-2 left-0 w-full flex justify-center"> {/* Botón de edición */}
                <Link to="/Post"> {/* Enlace a la página de edición, no me resulta, hay que crear la ruta */}
                  <button className="bg-porange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"> {/* Estilo del botón */}
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
