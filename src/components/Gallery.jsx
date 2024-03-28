import Card from "./Card";

const Gallery = () => {
  // Aquí podrías pasar datos de las tarjetas como propiedades, o podrías incluso manejar datos dinámicos
  const cards = [
    <Card key={1} />,
    <Card key={2} />,
    <Card key={3} />,
    <Card key={4} />,
    <Card key={5} />,
    <Card key={6} />,
    <Card key={7} />,
    <Card key={8} />,
    <Card key={9} />,
    <Card key={10} />,
    <Card key={11} />,
    <Card key={12} />,
    // Puedes agregar más tarjetas según sea necesario
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-10">
      {cards}
    </div>
  );
};

export default Gallery;
