function AboutMe() {
  return (
    <section
      id="about-me"
      className="h-dvh bg-[url('https://res.cloudinary.com/dbtk2voyv/image/upload/v1729883342/mohammad-rahmani-8qEB0fTe9Vw-unsplash_kz0qer.webp')] bg-fixed relative bg-transparent"
    >
      {/* <img
        src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729883342/mohammad-rahmani-8qEB0fTe9Vw-unsplash_kz0qer.webp"
        alt="image-1"
        className="object-cover  w-full h-full absolute top-0 left-0 z-[0]"
      /> */}
      <div className="w-full h-full pt-20 pb-20  back-blur bg-secondy-op">
        <div className="container  h-full flex justify-center items-center content-center	">
          <div className="w-full ">
            <div>
              <h3 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                About Me
              </h3>
              <p className="block mt-9 text-white font-semibold text-base lg:leading-10 xl:leading-10 sm:text-lg md:text-xl  text-wrap text-justify tracking-widest leading-7 sm:leading-8  px-3 sm:px-3 md:px-0">
                {`a passionate web developer with one year of experience in building and developing websites and web applications. Over the past year, I've worked on a variety of projects that include designing and developing interactive and user-friendly websites, I am always eager to learn and grow in the field of web development, and I look forward to new challenges that help me refine my skills and expand my experience. My goal is to use my knowledge and passion to create websites and web applications that improve people's lives and businesses.
`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

