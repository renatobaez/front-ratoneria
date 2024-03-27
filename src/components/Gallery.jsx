import Card from "./Card";

const Gallery = () => {
  // Aquí podrías pasar datos de las tarjetas como propiedades, o podrías incluso manejar datos dinámicos
  const cards = [
    <Card key={1} />,
    <Card key={2} />,
    <Card key={3} />,
    <Card key={4} />,
    <Card key={1} />,
    <Card key={2} />,
    <Card key={3} />,
    <Card key={4} />,
    <Card key={1} />,
    <Card key={2} />,
    <Card key={3} />,
    <Card key={4} />,
    // Puedes agregar más tarjetas según sea necesario
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {cards}
    </div>
  );
};

export default Gallery;
