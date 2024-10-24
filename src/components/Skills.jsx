function Skills() {
  return (
    <section
      id="about=me"
      className="container py-40 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-10 content-center "
    >
      <div className="">
        <div>
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:text-orange-400 md:text-cyan-400 lg:text-red-400 xl:text-indigo-400 2xl:text-lime-400">
            My Skills
          </h3>
          <div></div>
        </div>
      </div>
      <div className="self-center pt-20 hidden lg:block sm:hidden md:hidden">
        <img
          src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729625549/pexels-luis-gomes-166706-546819_ugaxc9.webp"
          alt="image-2"
          className="object-cover border-[3px] border-primary shadow-md shadow-primary rounded-lg "
        />
      </div>
    </section>
  );
}
export default Skills;
