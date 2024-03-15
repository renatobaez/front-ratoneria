import React from "react";

function Home() {
  return (
    <>
      <p>Home</p>
      <p>Variables de colores en el archivo tailwind.config.js</p>
      <div className="flex">
        <div className="w-10 h-20 bg-porange mr-2"></div>
        <div className="w-10 h-20 bg-pgrey mr-2"></div>
        <div className="w-10 h-20 bg-pdark-grey mr-2"></div>
        <div className="w-10 h-20 bg-pdark"></div>
      </div>
    </>
  );
}

export default Home;
