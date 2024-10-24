function AboutMe() {
  return (
    <section
      id="about=me"
      className="container pt-40 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-10 content-center "
    >
      <div className="self-center pt-20 hidden lg:block sm:hidden md:hidden">
        <img
          src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729612405/pexels-goumbik-574071_1_1_y77hue.webp"
          alt="image-1"
          className="object-cover border-[3px] border-primary shadow-md shadow-primary rounded-lg "
        />
      </div>
      <div className="">
        <div>
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:text-orange-400 md:text-cyan-400 lg:text-red-400 xl:text-indigo-400 2xl:text-lime-400">
            About Me
          </h3>
          <p className="block mt-9 text-font-gray text-base lg:leading-8 xl:leading-9 sm:text-lg md:text-xl font-normal text-wrap text-justify tracking-widest leading-7 sm:leading-8 md:leading-9 px-3 sm:px-3 md:px-0">
            {`a passionate web developer with one year of experience in building and
        developing websites and web applications. Over the past year, I've
        worked on a variety of projects that include designing and developing
        interactive and user-friendly websites. I am always eager to learn and
        grow in the field of web development, and I look forward to new
        challenges that help me refine my skills and expand my experience. My
        goal is to use my knowledge and passion to create websites and web
        applications that improve people's lives and businesses.`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
