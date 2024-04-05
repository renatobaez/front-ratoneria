import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

function Post() {
  const [userId] = useState(localStorage.getItem('id'));
  const token = localStorage.getItem('token');
  const { addShop } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isSubmit = async (data) => {
    try {
      const formData = {
        name: data.name,
        address: data.address,
        category_id: parseInt(data.category_id),
        image: data.image,
        user_id: userId,
      };

      console.log(formData);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        'http://localhost:3000/api/v1/shops',
        formData,
        config,
      );

      if (response.status === 200) {
        // Manejar la respuesta exitosa
        console.log('Local creado exitosamente');
        addShop(response.data);
      } else {
        // Manejar errores de respuesta
        console.error('Error al crear el local');
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error de red:', error);
    }
  };

  return (
    <div className="flex flex-col w-[50%] text-white mx-auto">
      <div className="flex ">
        <form
          onSubmit={handleSubmit(isSubmit)}
          className="flex flex-col w-2/3 m-auto gap-5 mt-10 self-center"
        >
          <label>Nombre del Local</label>
          <input
            {...register('name', { required: true })}
            className="w-full pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          />
          {errors.name && <span>Campo obligatorio</span>}

          <label>Direccion</label>
          <input
            {...register('address', { required: true })}
            className="w-full  pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          />
          {errors.descripcion && <span>Campo obligatorio</span>}

          <label>Categoría</label>
          <select
            {...register('category_id', { required: true })}
            className="w-[50%] pr-12 pl-3 py-2 bg-black outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          >
            <option value="">Seleccione una categoría</option>
            <option value={1}>Bar</option>
            <option value={2}>Restaurant</option>
          </select>
          {errors.categoria && <span>Seleccione una categoría</span>}

          <label>Foto: Ingresar URL de una foto</label>
          <input
            {...register('image', { required: true })}
            type="text"
            className="w-[50%] pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          />
          {errors.foto && <span>Debe subir una foto</span>}

          <label>Sitio Web : Opcional</label>
          <input
            {...register('web', { required: false })}
            type="text"
            className="w-[50%] pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          />

          <label>facebook: Opcional</label>
          <input
            {...register('facebook', { required: false })}
            type="text"
            className="w-[50%] pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          />

          <label>instagram: opcional</label>
          <input
            {...register('instagram', { required: false })}
            type="text"
            className="w-[50%] pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          />
          <div>
            <input
              type="submit"
              className="font-bold bg-porange text-[18px] rounded-sm p-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
