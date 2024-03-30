import { useForm } from 'react-hook-form';

function Post() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col w-[50%] text-white mx-auto">
      <div className="flex ">
        <form
          onSubmit={handleSubmit(isSubmit)}
          className="flex flex-col w-2/3 m-auto gap-5 mt-10 self-center"
        >
          <label>Nombre del Local</label>
          <input
            {...register('nombreLocal', { required: true })}
            className="w-full pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          />
          {errors.nombreLocal && <span>Campo obligatorio</span>}

          <label>descripcion</label>
          <input
            {...register('descripcion', { required: true })}
            className="w-full  pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          />
          {errors.descripcion && <span>Campo obligatorio</span>}

          <label>Categoria</label>
          <select
            {...register('categoria', { required: true })}
            className="w-[50%] pr-12 pl-3 py-2 bg-black outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          >
            <option value="">Seleccione una categoria</option>
            <option value="bar">Bar</option>
            <option value="Resto">Restaurant</option>
          </select>
          {errors.categoria && <span>Seleccione categoria</span>}

          <label>Foto</label>
          <input
            {...register('foto', { required: true })}
            type="file"
            className="w-[50%] pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-porange shadow-sm rounded-lg text-white"
          />
          {errors.foto && <span>Debe subir una foto</span>}

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
