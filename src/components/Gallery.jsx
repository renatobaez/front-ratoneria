import Card from "./Card";

const Gallery = () => {
  let img =
    "https://i.pinimg.com/originals/b0/cb/52/b0cb52a3da954d39ddd4f8e49ec8cb30.jpg";

  const cards = [
    <Card key={1} title={"Bar 1"} img={img} rating={5} category={"bar"} />,
    <Card key={2} title={"Bar 2"} img={img} rating={3} category={"bar"} />,
    <Card key={3} title={"Bar 3"} img={img} rating={2} category={"bar"} />,
    <Card key={4} title={"Bar 4"} img={img} rating={4} category={"bar"} />,
    <Card key={5} title={"Bar 5"} img={img} rating={2} category={"bar"} />,
    <Card key={6} title={"Bar 6"} img={img} rating={3} category={"bar"} />,
    <Card
      key={7}
      title={"Restaurant 1"}
      img={img}
      rating={2}
      category={"restaurante"}
    />,
    <Card
      key={8}
      title={"Restaurant 2"}
      img={img}
      rating={4}
      category={"restaurante"}
    />,
    <Card
      key={9}
      title={"Restaurant 3"}
      img={img}
      rating={5}
      category={"restaurante"}
    />,
    <Card
      key={10}
      title={"Restaurant 4"}
      img={img}
      rating={5}
      category={"restaurante"}
    />,
    <Card
      key={11}
      title={"Restaurant 5"}
      img={img}
      rating={3}
      category={"restaurante"}
    />,
    <Card
      key={12}
      title={"Restaurant 6"}
      img={img}
      rating={1}
      category={"restaurante"}
    />,
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-10">
      {cards}
    </div>
  );
};

export default Gallery;
