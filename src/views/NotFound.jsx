function NotFound() {
  return (
    <section
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg_black.JPG')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        className="lg:w-[35%] w-[80%] border-2 rounded-2xl"
        src="./bg_not_found_2.JPG"
        alt="not found pic"
      />
    </section>
  );
}

export default NotFound;
